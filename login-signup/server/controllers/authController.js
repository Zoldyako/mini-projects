import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

export const loginUser = async (req, res) => {
	try {
		const { username, password } = req.body

		if (!username || !password) {
			return res.status(400).json({
				error: 'Username and password are required'
			})
		}

		const user = users.find(user => user.username === username)
        if (!user) {
            return res.status(401).json({
                error: 'Invalid credentials'
            })
        }

        const isValidPassword = await bcrypt.compare(password, user.password)
        if (!isValidPassword) {
            return res.status(401).json({
                error: 'Invalid credentials'
            })
        }

        const payload = {
            id: user.id,
            username: user.username,
            email: user.email
        }

        const token = jwt.sign(
            payload,
            process.env.JWT_SECRET,
            {
                expiresIn: '1h',
                issuer: 'jwt-auth-demo',
                audience: 'jwt-auth-demo-users'
            }
        )

        res.json({
            message: 'Login successful',
            token,
            user: {
                id: user.id,
                username: user.username,
                email: user.email
            }
        })
	}

    catch(error) {
        console.error('Login error: ', error)
        res.status(500).json({ error: 'Internal server error '})
    }
}
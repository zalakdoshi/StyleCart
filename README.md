# StyleCart - Fashion E-Commerce Platform

A modern e-commerce application for browsing and purchasing fashion items with user authentication, shopping cart, and wishlist functionality.

## Features

- ✅ User authentication (Login/Signup)
- ✅ Persistent authentication state with JWT tokens
- ✅ Shopping cart with add/remove/update quantity
- ✅ Wishlist functionality
- ✅ Product browsing and filtering
- ✅ Responsive design
- ✅ Local storage persistence for cart and wishlist

## Tech Stack

### Frontend
- **React 18.2.0** - UI framework
- **React Router DOM 6.15.0** - Client-side routing
- **Axios 1.5.0** - HTTP client
- **React Responsive Carousel 3.2.23** - Image carousel
- **FontAwesome 6.4.2** - Icons
- **Tailwind CSS** (if configured) - Styling

### Backend
- **Node.js with Express** - Server framework
- **MongoDB** - Database
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin requests

## Project Structure

```
StyleCart/
├── frontend/
│   ├── src/
│   │   ├── components/         # React components
│   │   ├── utils/
│   │   │   └── apiClient.js   # API client with auth support
│   │   ├── App.js              # Main app component
│   │   ├── index.js            # Entry point
│   │   └── ...                 # Styles and other files
│   ├── package.json
│   ├── public/
│   └── ...
├── backend/
│   ├── controllers/            # Request handlers
│   ├── models/                 # Database models
│   ├── routes/                 # API routes
│   ├── middleware/             # Auth middleware
│   ├── server.js               # Entry point
│   ├── package.json
│   └── ...
└── README.md
```

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (running locally or MongoDB Atlas connection)

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the backend directory:
   ```env
   MONGODB_URI=mongodb://localhost:27017/stylecart
   JWT_SECRET=your_jwt_secret_key_here
   PORT=5000
   NODE_ENV=development
   ```

4. Start the backend server:
   ```bash
   npm start
   ```
   
   The server will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```
   
   The app will open at `http://localhost:3000`

## Authentication

### How Authentication Works

1. **Login/Signup**
   - User credentials are sent to the backend
   - Backend validates and returns a JWT token
   - Token is saved to localStorage along with user info

2. **Token Storage**
   - `authToken` - JWT token for API requests
   - `username` - User's username
   - `email` - User's email
   - `loginTimestamp` - When the user logged in

3. **Token Expiration**
   - Tokens expire after 24 hours
   - On app load, the token age is checked
   - If expired, user is automatically logged out
   - If valid, session is restored automatically

4. **Making Authenticated Requests**
   - Use the `apiClient` utility from `src/utils/apiClient.js`
   - The token is automatically included in the Authorization header
   - Format: `Authorization: Bearer <token>`

### API Client Usage

```javascript
import { apiClient, isAuthenticated, getAuthToken } from './utils/apiClient';

// Make authenticated GET request
const response = await apiClient.get('/api/user/profile');

// Make authenticated POST request
const response = await apiClient.post('/api/products/add-to-cart', {
  productId: '123',
  quantity: 1
});

// Check if user is authenticated
if (isAuthenticated()) {
  // User is logged in and token is valid
}
```

## Demo Credentials

For testing purposes, use these credentials:

- **Email:** `demo@stylecart.com`
- **Password:** `demo1234`

## Features in Detail

### Login State Persistence

When a user logs in:
1. JWT token is saved to localStorage
2. Username and email are saved
3. Login timestamp is recorded
4. User remains logged in after page refresh

When the app loads:
1. Check if token exists in localStorage
2. Verify token hasn't expired (24 hour expiration)
3. If valid, restore user session automatically
4. If expired, clear localStorage and redirect to login

### Shopping Cart

- Add items to cart
- View cart with all items
- Update item quantities
- Remove items
- Cart persists in localStorage across sessions
- Cart is cleared on logout

### Wishlist

- Add items to wishlist
- View wishlist items
- Remove items from wishlist
- Wishlist persists in localStorage
- Wishlist is cleared on logout

### Logout

When a user logs out:
1. All authentication tokens are cleared
2. User information is removed from localStorage
3. Cart and wishlist are cleared
4. User is redirected to the signup/login page

## API Endpoints

### Authentication
- `POST /backend/user/login` - User login
- `POST /backend/user/singup` - User registration (note: typo in original backend)

### Products
- `GET /backend/products` - Get all products
- `GET /backend/products/:id` - Get product details

### Cart (protected routes)
- `POST /backend/cart/add` - Add item to cart
- `GET /backend/cart` - Get cart items
- `DELETE /backend/cart/:id` - Remove from cart

### Wishlist (protected routes)
- `POST /backend/wishlist/add` - Add item to wishlist
- `GET /backend/wishlist` - Get wishlist items
- `DELETE /backend/wishlist/:id` - Remove from wishlist

## Building for Production

### Build Frontend
```bash
cd frontend
npm run build
```

The build artifacts will be stored in the `build/` directory.

### Build Backend
Backend is ready to deploy as-is. Make sure to set production environment variables:

```env
MONGODB_URI=your_production_mongodb_uri
JWT_SECRET=your_production_secret
NODE_ENV=production
PORT=5000
```

## Troubleshooting

### "Backend connection refused" error
- Make sure the backend server is running on port 5000
- Check that MongoDB is running and accessible
- Verify the MONGODB_URI in `.env`

### Token expiration issues
- Tokens expire after 24 hours of inactivity
- User will be logged out automatically
- User can log in again to get a new token

### Cart/Wishlist not persisting
- Check browser localStorage is enabled
- Check browser console for errors
- Clear localStorage and try again

### CORS errors
- Make sure backend has CORS enabled
- Check that frontend is making requests to the correct backend URL
- Verify CORS configuration in backend `server.js`

## Testing the Application

### Test Login Flow
1. Navigate to `/login`
2. Enter demo credentials
3. Click Login
4. Verify redirected to home page
5. Verify username displayed in navbar
6. Refresh page - user should still be logged in

### Test Logout Flow
1. Click Logout in navbar
2. Verify localStorage is cleared (check browser DevTools)
3. Verify redirected to signup page
4. Verify username no longer displayed

### Test Cart Persistence
1. Log in
2. Add items to cart
3. Refresh page
4. Verify cart items are still there
5. Logout
6. Verify cart is cleared

### Test Token Expiration
1. Log in
2. Change system time forward 24+ hours (testing only)
3. Refresh page
4. Verify user is logged out (would require backend support)

## Security Notes

⚠️ **Important Security Reminders**

1. **Never commit `.env` files** - Keep sensitive data out of version control
2. **JWT Secret** - Use a strong, random string in production
3. **HTTPS** - Always use HTTPS in production
4. **Token Storage** - Consider using `httpOnly` cookies for production (more secure than localStorage)
5. **Password Hashing** - Backend must use bcrypt or similar for password hashing
6. **Input Validation** - All user inputs must be validated both frontend and backend
7. **Rate Limiting** - Implement rate limiting on authentication endpoints

## Known Issues

- Signup endpoint has a typo: `/singup` instead of `/signup` (backend issue)
- localStorage is used for token storage (consider httpOnly cookies for production)

## Contributing

To contribute to StyleCart:

1. Create a new branch for your feature
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## License

This project is provided as-is for educational and commercial use.

## Support

For issues or questions, please open an issue in the repository or contact the development team.

---

**Last Updated:** October 31, 2026
**Version:** 1.0.0

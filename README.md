# X-Clone

A Twitter-like social media interface built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern UI/UX**: Clean, Twitter-inspired interface with dark theme
- **Responsive Design**: Built with Tailwind CSS grid system
- **Interactive Sidebar**: Navigation with hover effects and icons
- **Feed System**: Scrollable feed with post cards
- **Smooth Animations**: Transition effects on interactive elements
- **Hidden Scrollbars**: Clean scroll experience without visible scrollbars

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: React Icons
- **Images**: Next.js Image optimization

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Jayant9917/X-clone.git
   cd X-clone/client
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
client/
├── app/
│   ├── globals.css          # Global styles and scrollbar utilities
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page with sidebar and feed
├── components/
│   └── FeedCard/
│       └── index.tsx        # Individual post card component
├── public/                  # Static assets (profile images)
└── README.md
```

## 🎨 Key Components

### Main Layout (`app/page.tsx`)
- **Sidebar**: Fixed navigation with Twitter-style menu items
- **Feed Area**: Scrollable content area with multiple FeedCards
- **Grid System**: 12-column responsive layout

### FeedCard (`components/FeedCard/index.tsx`)
- User profile information
- Post content
- Interaction buttons (comment, retweet, like, analytics, share)

## 🎯 Features Implemented

- ✅ Twitter-like sidebar navigation
- ✅ Hover effects and transitions
- ✅ Responsive grid layout
- ✅ Hidden scrollbars with smooth scrolling
- ✅ Icon integration (React Icons)
- ✅ Dark theme styling
- ✅ Profile image optimization

## 🔧 Custom CSS Utilities

The project includes custom CSS classes in `globals.css`:

```css
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
```

This provides cross-browser scrollbar hiding while maintaining scroll functionality.

## 📱 Browser Support

- Chrome/Edge (Modern)
- Firefox
- Safari
- Mobile browsers

## 🚀 Deployment

Ready for deployment on platforms like:
- Vercel (recommended for Next.js)
- Netlify
- Railway
- Any Node.js hosting platform

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Built with ❤️ by [Jayant9917](https://github.com/Jayant9917)

---

**Note**: This is a frontend-only demonstration. Backend functionality, authentication, and real-time features would be needed for a production-ready Twitter clone.

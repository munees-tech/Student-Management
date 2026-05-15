# Student Management System - Frontend

A modern, responsive student management system built with React, TypeScript, Tailwind CSS, and React Router.

## Features

✅ **View All Students** - Display a complete list of students in a table format
✅ **View Student Details** - Click on any student to see their complete information
✅ **Add New Student** - Create new students with name and email
✅ **Edit Student** - Update existing student information
✅ **Delete Student** - Remove students with confirmation dialog
✅ **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
✅ **Form Validation** - Email validation and required field checks
✅ **Loading States** - Visual feedback during API calls
✅ **Error Handling** - User-friendly error messages

## Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── StudentList.tsx      # Display all students
│   │   ├── StudentDetail.tsx    # View single student
│   │   └── StudentForm.tsx      # Create/Edit student
│   ├── services/
│   │   └── api.ts               # API calls to backend
│   ├── App.tsx                  # Main app with routing
│   ├── App.css                  # Custom styles
│   ├── index.css                # Global styles (Tailwind)
│   ├── main.tsx                 # Entry point
│   └── assets/                  # Static assets
├── public/                      # Public files
├── tailwind.config.js           # Tailwind configuration
├── postcss.config.js            # PostCSS configuration
├── tsconfig.json                # TypeScript configuration
├── vite.config.ts               # Vite configuration
└── package.json                 # Dependencies
```

## Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

### Steps

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start the development server**

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5174/`

3. **Build for production**
   ```bash
   npm run build
   ```

## API Integration

The frontend connects to your backend API running on `http://localhost:5000/api`

### API Endpoints Used

| Method | Endpoint          | Description        |
| ------ | ----------------- | ------------------ |
| GET    | `/api/`           | Get all students   |
| POST   | `/api/`           | Create new student |
| GET    | `/api/:id`        | Get student by ID  |
| POST   | `/api/update/:id` | Update student     |
| DELETE | `/api/delete/:id` | Delete student     |

### Request/Response Format

**Student Object:**

```json
{
  "id": 1,
  "name": "example",
  "email": "example@.com"
}
```

## Component Documentation

### StudentList (`src/components/StudentList.tsx`)

- Displays all students in a responsive table
- Features:
  - Add Student button
  - View, Edit, Delete actions for each student
  - Delete confirmation modal
  - Loading and error states
  - Empty state message

### StudentDetail (`src/components/StudentDetail.tsx`)

- Shows complete details of a single student
- Features:
  - Read-only display of student information
  - Edit button to go to edit form
  - Back button to return to list

### StudentForm (`src/components/StudentForm.tsx`)

- Handles both creating and editing students
- Features:
  - Input validation (name and email)
  - Email format validation
  - Loading states on buttons
  - Success/error messages
  - Auto-redirect after successful submission

## Routing

Routes are defined in `App.tsx`:

| Route          | Component     | Purpose                  |
| -------------- | ------------- | ------------------------ |
| `/`            | StudentList   | Home - list all students |
| `/student/:id` | StudentDetail | View specific student    |
| `/`            | StudentForm   | Create new student       |
| `/delete/:id`  | DeleteStudent | Delete student           |
| `/edit/:id`    | StudentForm   | Edit existing student    |

## Styling

The application uses **Tailwind CSS** for styling:

- Utility-first CSS framework
- Responsive design with breakpoints
- Consistent color scheme and spacing
- Smooth transitions and hover effects

### Key Tailwind Classes Used

- `bg-blue-600` - Blue buttons
- `bg-green-600` - Edit buttons
- `bg-red-600` - Delete buttons
- `hover:` - Hover states
- `rounded-lg` - Rounded corners
- `shadow` - Shadows
- `transition` - Smooth transitions

## Development

### Technologies Used

- **React 19.2** - UI library
- **TypeScript** - Type safety
- **Vite 8.0** - Fast build tool
- **Tailwind CSS 4.3** - Styling
- **React Router 7.15** - Client-side routing

### Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

## Features in Detail

### 1. **Student List View**

- Table with ID, Name, and Email columns
- Edit, Delete buttons for each row
- Add Student button in header
- Empty state when no students exist

### 2. **Add/Create Student**

- Simple form with Name and Email fields
- Email validation
- Success notification after creation
- Auto-redirect to home page


### 3. **Edit Student**

- Pre-populated form with current student data
- Email validation
- Success notification after update
- Auto-redirect to student detail page

### 4. **Delete Student**

- Confirmation modal before deletion
- Prevents accidental deletions
- Auto-removes from list after deletion

## Error Handling

The application handles various error scenarios:

- **Network errors** - User-friendly error messages
- **Validation errors** - Form-level validation feedback
- **API errors** - Caught and displayed to user
- **Loading states** - Prevents multiple submissions



## Troubleshooting

### Port Already in Use

If port 5173 is in use, Vite will automatically try the next available port (5174, 5175, etc.)

### Backend Connection Issues

- Ensure backend is running on `http://localhost:5000`
- Check that CORS is enabled in backend if needed
- Verify API endpoints match backend routes

### TypeScript Errors

- Run `npm run lint` to check for issues
- Ensure all imports are correct
- Check that `.env` file is properly configured (if needed)


## Support

For issues or questions, please check:

1. Backend API documentation
2. React Router documentation
3. Tailwind CSS documentation

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**

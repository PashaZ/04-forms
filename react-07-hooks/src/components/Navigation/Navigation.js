// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import styles from './Navigation.module.css';

// const Navigation = () => (
//   <nav>
//     <NavLink exact to='/' className={styles.link} activeClassName={styles.activeLink}> Головна</NavLink>
//     <NavLink exact to='/authors' className={styles.link} activeClassName={styles.activeLink}> Автори</NavLink>
//     <NavLink to='/books' className={styles.link} > Книги</NavLink>

//   </nav>
// )
// // const Navigation = () => (
// //   <nav>
// //     <NavLink
// //       to="/signup"
// //       className={styles.link}
// //       activeClassName={styles.activeLink}
// //     >
// //       Форма
// //     </NavLink>

// //     <NavLink
// //       to="/colorpicker"
// //       className={styles.link}
// //       activeClassName={styles.activeLink}
// //     >
// //       Колорпикер
// //     </NavLink>

// //     <NavLink
// //       to="/counter"
// //       className={styles.link}
// //       activeClassName={styles.activeLink}
// //     >
// //       Счётчик
// //     </NavLink>

// //     <NavLink
// //       to="/clock"
// //       className={styles.link}
// //       activeClassName={styles.activeLink}
// //     >
// //       Часы
// //     </NavLink>

// //     <NavLink
// //       to="/pokemon"
// //       className={styles.link}
// //       activeClassName={styles.activeLink}
// //     >
// //       Покемоны
// //     </NavLink>
// //   </nav>
// // );

// // export default Navigation;

// export default function BooksView() {
//   const [books, setBooks] = useState(null);
//   useEffect(() => {
//     bookShelfAPI.fetchBooks().then(setBooks);
//   }, []);
//   return (
//     <div><PageHeading text='Книги' />
//       {books && books.map(book => <li key={book.id}> {book.title}</li>)}
//     </div>
//   );
// }

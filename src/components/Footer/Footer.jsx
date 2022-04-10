// import React from 'react';
// import Box from '@material-ui/core/Box';
// import Grid from '@material-ui/core/Grid';
// import RssFeed from '@material-ui/icons/RssFeed';
// import {
//   CategoryProvider,
//   CategoryTitle,
//   CategoryItem,
// } from '@mui-treasury/components/menu/category';
// import { useMagCategoryMenuStyles } from '@mui-treasury/styles/categoryMenu/mag';
// import { FontProvider, Font } from 'website/src/components/Font';

// export const Footer = React.memo(function MagCategoryMenu() {
//   return (
//     <Box minWidth={'80%'}>
//       <FontProvider fonts={[{ font: 'Rambla', weights: [400, 700] }]}>
//         <Grid container>
//           <Grid item xs={6}>
//             <CategoryProvider useStyles={useMagCategoryMenuStyles}>
//               <CategoryTitle>
//                 <Font>Travel</Font>
//               </CategoryTitle>
//               <CategoryItem>
//                 <Font>About</Font>
//               </CategoryItem>
//               <CategoryItem>
//                 <Font>Contact</Font>
//               </CategoryItem>
//               <CategoryItem>
//                 <Font>Terms of Service</Font>
//               </CategoryItem>
//               <CategoryItem>
//                 <Font>Privacy Policy</Font>
//               </CategoryItem>
//             </CategoryProvider>
//           </Grid>
//           <Grid item xs={6}>
//             <CategoryProvider useStyles={useMagCategoryMenuStyles}>
//               <CategoryTitle>
//                 <Font>Follow us</Font>
//               </CategoryTitle>
//               <CategoryItem>
//                 <Font>Facebook</Font>
//               </CategoryItem>
//               <CategoryItem>
//                 <Font>Twitter</Font>
//               </CategoryItem>
//               <CategoryItem>
//                 <Font>Instagram</Font>
//               </CategoryItem>
//               <CategoryItem>
//                 <RssFeed fontSize={'small'} style={{ marginRight: 4 }} />{' '}
//                 <Font>RSS</Font>
//               </CategoryItem>
//             </CategoryProvider>
//           </Grid>
//         </Grid>
//       </FontProvider>
//     </Box>
//   );
// });
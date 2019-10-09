const defaultState = {
  phone: '646.872.9977',
  company: 'Eamonn and Ian llc',
  email: 'info@eamonnandian.com',

  works: [
    {
      status: 'Completed 2019',
      // tools: ['React', 'Redux', 'SCSS', 'Ytdl', 'Node', 'Firebase Suite'],
      type: 'IOS Application',
      img:
        'https://firebasestorage.googleapis.com/v0/b/gilesnugent-ee4d9.appspot.com/o/app-icons%2Fcard.png?alt=media&token=40bd510b-a015-4923-b8c3-d363e7f768f4',
      // codeLink: 'https://github.com/archon21/vulpes',
      // codeLink2: 'https://github.com/archon21/Voteanonymous-Backend',
      siteLink: 'https://apps.apple.com/us/app/bridge-mentor/id1475410652?ls=1',
      name: 'Bridge Mentor',
      desc:
        'Practice your bridge skills while competing against the computer! Learn optimal bidding and play strategies.'
    },
    {
      status: 'Completed 2017',
      // tools: ['React', 'Redux', 'Firebase Suite', 'SCSS'],
      type: 'IOS Application',
      img:
        'https://firebasestorage.googleapis.com/v0/b/gilesnugent-ee4d9.appspot.com/o/app-icons%2FiTunesArtwork%403x.png?alt=media&token=b82bf0bc-cda3-4d27-a007-cc2b8dece18f',
      // codeLink: 'https://github.com/archon21/HayesDevelopers',
      // codeLink2: 'https://github.com/archon21/Voteanonymous-Backend',
      siteLink: 'https://apps.apple.com/us/app/golffolio/id1210225330?ls=1',

      name: 'Golfolio',
      desc:
        'GolfFolio allows you to get more out of your golf outings! Create tournaments, compete with your friends, track your shots and build a golf social network.'
    },
    {
      status: 'Completed 2010',
      // tools: ['React', 'Redux', 'SCSS', 'Firebase Suite'],
      type: 'IOS Application',
      img:
        'https://firebasestorage.googleapis.com/v0/b/gilesnugent-ee4d9.appspot.com/o/app-icons%2Ficon-1024.png?alt=media&token=aff2d3e7-47aa-4b68-b5b0-3cb227bd4e41',
      // codeLink: 'https://github.com/archon21/MariasPizza',
      // codeLink2: 'https://github.com/archon21/Voteanonymous-Backend',
      siteLink: 'https://apps.apple.com/us/app/mortgage-calc-pro/id373970197',
      name: 'Mortgage Calc Pro',
      desc:
        'Simple and complete mortgage calculator. An iTunes "New and Noteworthy" and a "What\'s Hot" Finance application. Includes tables with monthly payments, additional charges, tax deductions.'
    },
    {
      status: 'Completed 2010',
      // tools: ['HTML', 'CSS', 'Wordpress', 'jQuery'],
      type: 'IOS Application',
      img:
        'https://firebasestorage.googleapis.com/v0/b/gilesnugent-ee4d9.appspot.com/o/app-icons%2Fcar-calc.png?alt=media&token=4ee6d15d-198f-481b-aef1-eb7658d203d1',
      // codeLink: 'https://github.com/archon21/MariasPizza',
      // codeLink2: 'https://github.com/archon21/Voteanonymous-Backend',
      siteLink: 'https://apps.apple.com/us/app/car-calc-pro/id378144914',
      name: 'Car Calc Pro',
      desc:
        'Calculate and compare monthly payments for auto loans. An "Outstanding" review from the Mac Observer. Create and email loan summaries.'
    },
    {
      status: 'Completed 2010',
      // tools: ['HTML', 'CSS', 'Wordpress', 'jQuery'],
      type: 'IOS Application',
      img:
        'https://firebasestorage.googleapis.com/v0/b/gilesnugent-ee4d9.appspot.com/o/app-icons%2F%2Bx.png?alt=media&token=14faac12-976e-4a77-96eb-f4bc492bfcc0',
      // codeLink: 'https://github.com/archon21/MariasPizza',
      // codeLink2: 'https://github.com/archon21/Voteanonymous-Backend',
      siteLink: 'https://apps.apple.com/us/app/math-room/id375834796?ls=1',
      name: 'Math Room',
      desc:
        'Help your kids learn their math basics through simple, fill-in-the-blank times and addition tables.'
    }
  ],
  currentWorks: [

  ]
};

export default function(state = defaultState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

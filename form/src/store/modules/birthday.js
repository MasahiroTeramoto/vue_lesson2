const state = {
  years: [
    {
      year: '1989',
      japanese: '平成元年'
    },
    {
      year: '1990',
      japanese: '平成2年'
    },
    {
      year: '1991',
      japanese: '平成3年'
    },
    {
      year: '1992',
      japanese: '平成4年'
    },
    {
      year: '1993',
      japanese: '平成5年'
    },
    {
      year: '1994',
      japanese: '平成6年'
    },
    {
      year: '1995',
      japanese: '平成7年'
    },
    {
      year: '1996',
      japanese: '平成8年'
    },
    {
      year: '1997',
      japanese: '平成9年'
    },
    {
      year: '1998',
      japanese: '平成10年'
    },
    {
      year: '1999',
      japanese: '平成11年'
    },
    {
      year: '2000',
      japanese: '平成12年'
    },
    {
      year: '2001',
      japanese: '平成13年'
    },
    {
      year: '2002',
      japanese: '平成14年'
    },
    {
      year: '2003',
      japanese: '平成15年'
    },
    {
      year: '2004',
      japanese: '平成16年'
    },
    {
      year: '2005',
      japanese: '平成17年'
    },
    {
      year: '2006',
      japanese: '平成18年'
    },
    {
      year: '2007',
      japanese: '平成19年'
    },
    {
      year: '2008',
      japanese: '平成20年'
    },
    {
      year: '2009',
      japanese: '平成21年'
    },
    {
      year: '2010',
      japanese: '平成22年'
    },
    {
      year: '2011',
      japanese: '平成23年'
    },
    {
      year: '20012',
      japanese: '平成24年'
    },
    {
      year: '20013',
      japanese: '平成25年'
    },
    {
      year: '20014',
      japanese: '平成26年'
    },
    {
      year: '20015',
      japanese: '平成27年'
    },
    {
      year: '20016',
      japanese: '平成28年'
    },
    {
      year: '20017',
      japanese: '平成29年'
    },
    {
      year: '20018',
      japanese: '平成30年'
    },
    {
      year: '20019',
      japanese: '平成31年'
    },
    {
      year: '20020',
      japanese: '令和1年'
    },
    {
      year: '20021',
      japanese: '令和2年'
    }
  ],
  months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  days: [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31
  ]
};

const getters = {
  years: state => state.years,
  months: state => state.months,
  days: state => state.days
};

export default {
  namespaced: true,
  state,
  getters
};

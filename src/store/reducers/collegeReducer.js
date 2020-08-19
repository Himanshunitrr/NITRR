const initReducer = {
  colleges: {
      nit_raipur: {
        threads: {
            coding: [
              { id: 1, title: "HImanshu" },
              { id: 1, title: "Golu" },
              { id: 1, title: "Bholu" }
            ],
            hacking: [
              { id: 1, title: "HImanshu" },
              { id: 1, title: "HImanshu" },
              { id: 1, title: "HImanshu" }
            ]
        }
      },
    nit_delhi: {
      threads:{
        coding: [
          { id: 1, title: "HImanshu" },
          { id: 1, title: "HImanshu" },
          { id: 1, title: "HImanshu" }
        ],
        hacking: [
          { id: 1, title: "HImanshu" },
          { id: 1, title: "HImanshu" },
          { id: 1, title: "HImanshu" }
        ]
      }
    }
}
};

const collegeReducer = (state = initReducer, action) => {
  switch (action.type) {
    case 'CREATE_POST':
      console.log(action.post)
  }
  return state;
};

export default collegeReducer;

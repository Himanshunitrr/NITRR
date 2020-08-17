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
        coding: [
          { id: 1, title: "HImanshu" },
          { id: 1, title: "HImanshu" },
          { id: 1, title: "HImanshu" }
        ]
      }
    }
}
};

const collegeReducer = (state = initReducer, action) => {
  return state;
};

export default collegeReducer;

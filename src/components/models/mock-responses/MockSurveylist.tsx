const MockSurveylist = [
    {
      id: 1,
      name: "Survey1",
      desc: "Suvery1 description",
      startDate: new Date(),
      endDate: new Date(),
      status: "in progress",
      daysLeft: 5,
      questions: [
        {
          id: 111,
          name: "what is your annual salary?",
          ans: "123345",
          type: "text",
          options: [],
          //R - right, W- wrong, NA - Not applicable
          status: "NA",
          subText: "Your answers are encrypted end-to-end",
          mandatory: "Y",
        },
        {
          id: 112,
          name: "what is the financial capital of India?",
          ans: "Delhi",
          options: ["Delhi", "Banglore", "Mumbai"],
          type: "select",
          status: "R", //R, W
          subText: "Select as many as applicable",
          mandatory:"N"
        },
        {
          id: 113,
          name: "what is the financial capital of India?",
          ans: "Delhi",
          options: ["Delhi", "Banglore", "Mumbai"],
          type: "select",
          status: "R", //R, W
          subText: "Select as many as applicable",
          mandatory:"N"
        },
        {
          id: 114,
          name: "Biggest country in the world in terms of population?",
          ans: "China",
          options: ["India", "China", "America"],
          type: "select",
          status: "NA",
          subText: "Select as many as applicable",
          mandatory:"N"
        }
      ],
    },
    {
      id: 2,
      name: "Survey2",
      desc: "Suvery2 description",
      startDate: new Date(),
      endDate: new Date(),
      status: "in progress",
      daysLeft: 5,
      questions: [
        {
          id: 111,
          name: "what is your annual salary?",
          ans: "123345",
          type: "text",
          options: [],
          //R - right, W- wrong, NA - Not applicable
          status: "NA",
          subText: "Your answers are encrypted end-to-end",
          mandatory: "Y",
        },
        {
          id: 112,
          name: "what is the financial capital of India?",
          ans: "Delhi",
          options: ["Delhi", "Banglore", "Mumbai"],
          type: "select",
          status: "R", //R, W
          subText: "Select as many as applicable",
          mandatory:"N"
        },
        {
          id: 113,
          name: "what is the financial capital of India?",
          ans: "Delhi",
          options: ["Delhi", "Banglore", "Mumbai"],
          type: "select",
          status: "R", //R, W
          subText: "Select as many as applicable",
          mandatory:"N"
        },
        {
          id: 114,
          name: "Biggest country in the world in terms of population?",
          ans: "China",
          options: ["India", "China", "America"],
          type: "select",
          status: "NA",
          subText: "Select as many as applicable",
          mandatory:"N"
        }
      ],
    },
    {
      id: 3,
      name: "Survey3",
      desc: "Suvery3 description",
      startDate: new Date(),
      endDate: new Date(),
      status: "in progress",
      daysLeft: 7,
      questions: [
        {
          id: 111,
          name: "what is your annual salary?",
          ans: "123345",
          type: "text",
          options: [],
          //R - right, W- wrong, NA - Not applicable
          status: "NA",
          subText: "Your answers are encrypted end-to-end",
          mandatory: "Y",
        },
        {
          id: 112,
          name: "what is the financial capital of India?",
          ans: "Delhi",
          options: ["Delhi", "Banglore", "Mumbai"],
          type: "select",
          status: "R", //R, W
          subText: "Select as many as applicable",
          mandatory:"N"
        },
        {
          id: 113,
          name: "what is the financial capital of India?",
          ans: "Delhi",
          options: ["Delhi", "Banglore", "Mumbai"],
          type: "select",
          status: "R", //R, W
          subText: "Select as many as applicable",
          mandatory:"N"
        },
        {
          id: 114,
          name: "Biggest country in the world in terms of population?",
          ans: "China",
          options: ["India", "China", "America"],
          type: "select",
          status: "NA",
          subText: "Select as many as applicable",
          mandatory:"N"
        }
      ]
    },
    {
      id: 4,
      name: "Survey4",
      desc: "Suvery4 description",
      startDate: new Date(),
      endDate: new Date(),
      status: "in progress",
      daysLeft: 7,
      questions: [
        {
          id: 111,
          name: "what is your annual salary?",
          ans: "123345",
          type: "text",
          options: [],
          //R - right, W- wrong, NA - Not applicable
          status: "NA",
          subText: "Your answers are encrypted end-to-end",
          mandatory: "Y",
        },
        {
          id: 112,
          name: "what is the financial capital of India?",
          ans: "Delhi",
          options: ["Delhi", "Banglore", "Mumbai"],
          type: "select",
          status: "R", //R, W
          subText: "Select as many as applicable",
          mandatory:"N"
        },
        {
          id: 113,
          name: "what is the financial capital of India?",
          ans: "Delhi",
          options: ["Delhi", "Banglore", "Mumbai"],
          type: "select",
          status: "R", //R, W
          subText: "Select as many as applicable",
          mandatory:"N"
        },
        {
          id: 114,
          name: "Biggest country in the world in terms of population?",
          ans: "China",
          options: ["India", "China", "America"],
          type: "select",
          status: "NA",
          subText: "Select as many as applicable",
          mandatory:"N"
        }
      ]
    },
    {
      id: 5,
      name: "Survey5",
      desc: "Suvery5 description",
      startDate: new Date(),
      endDate: new Date(),
      status: "in progress",
      daysLeft: 7,
      questions: [
        {
          id: 111,
          name: "what is your annual salary?",
          ans: "123345",
          type: "text",
          options: [],
          //R - right, W- wrong, NA - Not applicable
          status: "NA",
          subText: "Your answers are encrypted end-to-end",
          mandatory: "Y",
        },
        {
          id: 112,
          name: "what is the financial capital of India?",
          ans: "Delhi",
          options: ["Delhi", "Banglore", "Mumbai"],
          type: "select",
          status: "R", //R, W
          subText: "Select as many as applicable",
          mandatory:"N"
        },
        {
          id: 113,
          name: "what is the financial capital of India?",
          ans: "Delhi",
          options: ["Delhi", "Banglore", "Mumbai"],
          type: "select",
          status: "R", //R, W
          subText: "Select as many as applicable",
          mandatory:"N"
        },
        {
          id: 114,
          name: "Biggest country in the world in terms of population?",
          ans: "China",
          options: ["India", "China", "America"],
          type: "select",
          status: "NA",
          subText: "Select as many as applicable",
          mandatory:"N"
        }
      ]
    },
    {
      id: 6,
      name: "Survey6",
      desc: "Suvery6 description",
      startDate: new Date(),
      endDate: new Date(),
      status: "in progress",
      daysLeft: 7,
      questions: [
        {
          id: 111,
          name: "what is your annual salary?",
          ans: "123345",
          type: "text",
          options: [],
          //R - right, W- wrong, NA - Not applicable
          status: "NA",
          subText: "Your answers are encrypted end-to-end",
          mandatory: "Y",
        },
        {
          id: 111,
          name: "s  s s s  s sdfjdasklfjsda;lfj;alsd fsakldfj;asd f s  s sdfjdasklfjsda;lfj;alsd fsakldfj;asd f; asdfj;sadkl fj;121312312341324 asfjsadkf;j as;kdlfjas ;ask;lfjas; d safjdsal;fj sa;f jwhat is your annual salary?",
          ans: "123345",
          type: "text",
          options: [],
          //R - right, W- wrong, NA - Not applicable
          status: "NA",
          subText: "Your answers are encrypted end-to-end",
          mandatory: "Y",
        },
        {
          id: 112,
          name: "what is the financial capital of India?",
          ans: "Delhi",
          options: ["Delhi", "Banglore", "Mumbai"],
          type: "select",
          status: "R", //R, W
          subText: "Select as many as applicable",
          mandatory:"N"
        },
        {
          id: 113,
          name: "what is the financial capital of India?",
          ans: "Delhi",
          options: ["Delhi", "Banglore", "Mumbai"],
          type: "select",
          status: "R", //R, W
          subText: "Select as many as applicable",
          mandatory:"N"
        },
        {
          id: 114,
          name: "Biggest country in the world in terms of population?",
          ans: "China",
          options: ["India", "China", "America"],
          type: "select",
          status: "NA",
          subText: "Select as many as applicable",
          mandatory:"N"
        }
      ]
    }
  
  ];
  export default MockSurveylist;
  
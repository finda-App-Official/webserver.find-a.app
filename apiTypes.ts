interface Job {
  type: "sponsors" | "public";
  message: {
    type: "welcome" | "normal" | "canceled";
    content: {
      title: string;
      details: string;
    };
  };
  user: {
    name: string;
    id: string;
  };
}

export default Job;

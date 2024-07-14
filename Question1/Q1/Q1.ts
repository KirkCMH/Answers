type UserInfo = {
  firstName: string;
  lastName: string | undefined;
  customerID: number;
  note: string | undefined;
  profession:
    | "student"
    | "freelancer"
    | "productOwner"
    | "engineer"
    | "systemAnalytics";
};

function sortUserName2(user: UserInfo[]) {
  // user = UserInfo[]
  const sortedArr = user.sort((a, b) => b.customerID - a.customerID);
  const newUserArr = sortedArr.map((item) => {
    const info = `${item.firstName} ${item.lastName}-${item.customerID}`;
    return info;
  });

  return newUserArr;
}

function sortByType2(user: UserInfo[]) {
  const professionPriority = {
    systemAnalytics: 5,
    engineer: 4,
    productOwner: 3,
    freelancer: 2,
    student: 1,
  };

  return user.sort((a, b) => {
    return professionPriority[b.profession] - professionPriority[a.profession];
  });
}

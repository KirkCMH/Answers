/*
There is an array, each item has such format:
{firstName: 'xxx', lastName: 'xxx', customerID: 'xxx', note: 'xxx', 
profession: ‘xxx’}
lastName, note can be empty, customerID can only be a set of digital 
numbers.
profession can only have ‘student’, ‘freelancer’, ‘productOwner’, 
‘engineer’ or ‘systemAnalytics’.
*/

/** 
Q1. Please follow the principle (‘firstName’ + ‘lastName’ + ‘customerID’) 
to sort this array and print it out.
**/

/* FORMAT DATA */
/*
type UserInfo = {
  firstName: string;
  lastName: string | undefined;
  customerID: number;
  note: string | undefined;
  profession: 'student'| 'freelancer'| 'productOwner'| 'engineer' | 'systemAnalytics';
}

const users:UserInfo[] = []
  
*/
function sortUserName(user) {
  // user = UserInfo[]
  const sortedArr = user.sort((a, b) => b.customerID - a.customerID);
  const newUserArr = sortedArr.map((item) => {
    const info = `${item.firstName} ${item.lastName}-${item.customerID}`;
    return info;
  });

  return newUserArr;
}

/** 
Q2. Please sort by ‘profession’ to follow the principle. 
(‘systemAnalytics’ > ‘engineer’ > ‘productOwner’ > ‘freelancer’ > 
‘student’’)
**/
function sortByType(user) {
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

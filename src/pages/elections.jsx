import Container from "components/Container";
import Layout from "components/Layout";

const ElectionsPage = () => {
  const candidates = [
    {
      name: 'SACHIN KUMAR MISHRA',
      email: '21f1006665@student.onlinedegree.iitm.ac.in',
      house: 'Saranda',
      post: 'Mentor'
    },
    {
      name: 'Amit Vikram',
      email: '21f3003072@student.onlinedegree.iitm.ac.in',
      house: 'Nilgiri',
      post: 'House Deputy Secretary'
    },
    {
      name: 'Virat Jain',
      email: '21f3000153@student.onlinedegree.iitm.ac.in',
      house: 'Nilgiri',
      post: 'Mentor'
    },
    {
      name: 'Ankit Kumar Garg ',
      email: '21f3001924@student.onlinedegree.iitm.ac.in',
      house: 'Corbett',
      post: 'Mentor'
    },
    {
      name: 'Pratham Sharma',
      email: '21f1006197@student.onlinedegree.iitm.ac.in',
      house: 'Saranda',
      post: 'Mentor'
    },
    {
      name: 'Chintada Lokabhiram',
      email: '22f1001409@student.onlinedegree.iitm.ac.in',
      house: 'Wayanad',
      post: 'House Web Admin'
    },
    {
      name: 'Diksha Manchanda',
      email: '22f1000154@student.onlinedegree.iitm.ac.in',
      house: 'Bandipur',
      post: 'House Secretary'
    },
    {
      name: 'Yash Lohana ',
      email: '21f1003714@student.onlinedegree.iitm.ac.in',
      house: 'Gir',
      post: 'Mentor'
    },
    {
      name: 'Ashish Kumar ',
      email: '21f1002089@student.onlinedegree.iitm.ac.in',
      house: 'Bandipur',
      post: 'Mentor'
    },
    {
      name: 'Gaurav Shetty',
      email: '22f1001780@student.onlinedegree.iitm.ac.in',
      house: 'Bandipur',
      post: 'Mentor'
    },
    {
      name: 'Rahul Chakraborty',
      email: '21f1002786@student.onlinedegree.iitm.ac.in',
      house: 'Pichavaram',
      post: 'Mentor'
    },
    {
      name: 'Megha Singh Solanki',
      email: '22f2000206@student.onlinedegree.iitm.ac.in',
      house: 'Kanha',
      post: 'Mentor'
    },
    {
      name: 'Abishek Sajeev',
      email: '21f1004677@student.onlinedegree.iitm.ac.in',
      house: 'Pichavaram',
      post: 'Mentor'
    },
    {
      name: 'Anant S Sathe',
      email: '22f1001679@student.onlinedegree.iitm.ac.in',
      house: 'Kaziranga',
      post: 'Mentor'
    },
    {
      name: 'Sunil Kumar CT',
      email: '21f3000657@student.onlinedegree.iitm.ac.in',
      house: 'Corbett',
      post: 'Mentor'
    },
    {
      name: 'Kethireddi Lokesh Kumar ',
      email: '21f1000144@student.onlinedegree.iitm.ac.in',
      house: 'Sunderbans',
      post: 'Mentor'
    },
    {
      name: 'Prashant S Markad',
      email: '21f1005175@student.onlinedegree.iitm.ac.in',
      house: 'Wayanad',
      post: 'Mentor'
    },
    {
      name: 'Nishanur Rahman',
      email: '21f2000550@student.onlinedegree.iitm.ac.in',
      house: 'Kanha',
      post: 'Mentor'
    },
    {
      name: 'Ramakrishna Bhogaraju ',
      email: '21f2000523@student.onlinedegree.iitm.ac.in',
      house: 'Kaziranga',
      post: 'Mentor'
    },
    {
      name: 'Anurag Mondal',
      email: '21f1002807@student.onlinedegree.iitm.ac.in',
      house: 'Saranda',
      post: 'House Secretary'
    },
    {
      name: 'Sonu Yadav ',
      email: '21f1006742@student.onlinedegree.iitm.ac.in',
      house: 'Wayanad',
      post: 'House Deputy Secretary'
    },
    {
      name: 'Saurav Kumar Singh',
      email: '21f1000752@student.onlinedegree.iitm.ac.in',
      house: 'Nallamala',
      post: 'House Secretary'
    },
    {
      name: 'Padmaja sharma',
      email: '21f3002898@student.onlinedegree.iitm.ac.in',
      house: 'Sunderbans',
      post: 'House Secretary'
    },
    {
      name: 'Srivinay Sridhar ',
      email: '21f1006569@student.onlinedegree.iitm.ac.in',
      house: 'Namdapha',
      post: 'House Secretary'
    },
    {
      name: 'J L Shreya',
      email: '21f1006504@student.onlinedegree.iitm.ac.in',
      house: 'Saranda',
      post: 'Mentor'
    },
    {
      name: 'Ishdeep  singh sidhu',
      email: '21f3000877@student.onlinedegree.iitm.ac.in',
      house: 'Sunderbans',
      post: 'Mentor'
    },
    {
      name: 'SIRPA SAI SNEHITH',
      email: '21f2001365@student.onlinedegree.iitm.ac.in',
      house: 'Saranda',
      post: 'House Secretary'
    },
    {
      name: 'Prasanthi Singh',
      email: '21f2001040@student.onlinedegree.iitm.ac.in',
      house: 'Nallamala',
      post: 'House Deputy Secretary'
    },
    {
      name: 'ABHISHEK KUMAR',
      email: '21f1002429@student.onlinedegree.iitm.ac.in',
      house: 'Pichavaram',
      post: 'Mentor'
    },
    {
      name: 'Mrityunjay Chakraborty ',
      email: '21f3001385@student.onlinedegree.iitm.ac.in',
      house: 'Saranda',
      post: 'House Deputy Secretary'
    },
    {
      name: 'Rema Mohan',
      email: '21f3002031@student.onlinedegree.iitm.ac.in',
      house: 'Gir',
      post: 'Mentor'
    },
    {
      name: 'Vedprakash Sharma',
      email: '21f1006369@student.onlinedegree.iitm.ac.in',
      house: 'Kanha',
      post: 'Mentor'
    },
    {
      name: 'Amritanshu Prasad',
      email: '21f1003347@student.onlinedegree.iitm.ac.in',
      house: 'Gir',
      post: 'House Secretary'
    },
    {
      name: 'Kunal Chaturvedi',
      email: '21f1003353@student.onlinedegree.iitm.ac.in',
      house: 'Sunderbans',
      post: 'House Secretary'
    },
    {
      name: 'DR. AMRUTA KAPOOR ( JAWAJALA)',
      email: '22f1001548@student.onlinedegree.iitm.ac.in',
      house: 'Namdapha',
      post: 'Mentor'
    },
    {
      name: 'Vedant Ghanekar',
      email: '21f1004192@student.onlinedegree.iitm.ac.in',
      house: 'Kaziranga',
      post: 'House Secretary'
    },
    {
      name: 'Avinash Singh ',
      email: '21f1006236@student.onlinedegree.iitm.ac.in',
      house: 'Nilgiri',
      post: 'House Secretary'
    },
    {
      name: 'Dev Jain',
      email: '21f3002500@student.onlinedegree.iitm.ac.in',
      house: 'Wayanad',
      post: 'House Secretary'
    },
    {
      name: 'Aditya R',
      email: '21f1006862@student.onlinedegree.iitm.ac.in',
      house: 'Kanha',
      post: 'House Deputy Secretary'
    },
    {
      name: 'Deependra Pratap Singh ',
      email: '21f2000568@student.onlinedegree.iitm.ac.in',
      house: 'Bandipur',
      post: 'House Deputy Secretary'
    },
    {
      name: 'Abhishek Hemanth Annaldasula',
      email: '22f1001393@student.onlinedegree.iitm.ac.in',
      house: 'Namdapha',
      post: 'Mentor'
    },
    {
      name: 'Midhun Reddy',
      email: '22f1001766@student.onlinedegree.iitm.ac.in',
      house: 'Nallamala',
      post: 'House Deputy Secretary'
    },
    {
      name: 'Abhishek ojha ',
      email: '22f1001774@student.onlinedegree.iitm.ac.in',
      house: 'Sunderbans',
      post: 'House Deputy Secretary'
    },
    {
      name: 'Akhil Srinivas Parimala',
      email: '21f1001203@student.onlinedegree.iitm.ac.in',
      house: 'Saranda',
      post: 'House Secretary'
    },
    {
      name: 'Dibyendu Laha',
      email: '21f1006498@student.onlinedegree.iitm.ac.in',
      house: 'Kanha',
      post: 'House Secretary'
    },
    {
      name: 'Indranil Bhattacharyya',
      email: '21f1005840@student.onlinedegree.iitm.ac.in',
      house: 'Bandipur',
      post: 'House Deputy Secretary'
    },
    {
      name: 'Soumyabrata Mahapatra',
      email: '21f1003070@student.onlinedegree.iitm.ac.in',
      house: 'Nilgiri',
      post: 'House Secretary'
    },
    {
      name: 'Deon Levon Dmello',
      email: '21f3002473@student.onlinedegree.iitm.ac.in',
      house: 'Bandipur',
      post: 'House Secretary'
    },
    {
      name: 'Aman Kankriya',
      email: '21f2000493@student.onlinedegree.iitm.ac.in',
      house: 'Sunderbans',
      post: 'Mentor'
    },
    {
      name: 'Uday Ravi Varma',
      email: '21f1000284@student.onlinedegree.iitm.ac.in',
      house: 'Kanha',
      post: 'Mentor'
    },
    {
      name: 'Santheri Bhat',
      email: '21f1003372@student.onlinedegree.iitm.ac.in',
      house: 'Nilgiri',
      post: 'House Secretary'
    },
    {
      name: 'Kumkum kwatra ',
      email: '21f3000783@student.onlinedegree.iitm.ac.in',
      house: 'Pichavaram',
      post: 'House Deputy Secretary'
    },
    {
      name: 'Tirth Joshi',
      email: '21f1004286@student.onlinedegree.iitm.ac.in',
      house: 'Namdapha',
      post: 'House Secretary'
    },
    {
      name: 'ROUNAK MUKHOPADHYAY ',
      email: '22f1000876@student.onlinedegree.iitm.ac.in',
      house: 'Nallamala',
      post: 'House Deputy Secretary'
    },
    {
      name: 'Avijeet Palit',
      email: '21f1005675@student.onlinedegree.iitm.ac.in',
      house: 'Sunderbans',
      post: 'House Deputy Secretary'
    },
    {
      name: 'Syed Firasat Hussain Wajahat ',
      email: '21f1000732@student.onlinedegree.iitm.ac.in',
      house: 'Pichavaram',
      post: 'Mentor'
    },
    {
      name: 'Prondipan Mondal',
      email: '21f3003158@student.onlinedegree.iitm.ac.in',
      house: 'Nilgiri',
      post: 'Mentor'
    },
    {
      name: 'Mayank Jaiswal',
      email: '21f1007001@student.onlinedegree.iitm.ac.in',
      house: 'Namdapha',
      post: 'House Deputy Secretary'
    },
    {
      name: 'PRINCY MARIAM JACOB',
      email: '21f1001685@student.onlinedegree.iitm.ac.in',
      house: 'Sunderbans',
      post: 'House Secretary'
    },
    {
      name: 'Madhumithaa RP',
      email: '21f1006000@student.onlinedegree.iitm.ac.in',
      house: 'Kaziranga',
      post: 'House Deputy Secretary'
    },
    {
      name: 'Pratham Bhalla',
      email: '21f1003052@student.onlinedegree.iitm.ac.in',
      house: 'Bandipur',
      post: 'House Secretary'
    },
    {
      name: 'Arshita Gulati',
      email: '22f1000663@student.onlinedegree.iitm.ac.in',
      house: 'Sunderbans',
      post: 'House Web Admin'
    },
    {
      name: 'Gurneet Kaur Bhuller',
      email: '21f2000672@student.onlinedegree.iitm.ac.in',
      house: 'Pichavaram',
      post: 'House Deputy Secretary'
    },
    {
      name: 'Humanshu Dilipkumar Gajbhiye',
      email: '21f1001893@student.onlinedegree.iitm.ac.in',
      house: 'Nallamala',
      post: 'House Secretary'
    },
    {
      name: 'Harshvardhan Rajesh Wattamwar',
      email: '21f3003166@student.onlinedegree.iitm.ac.in',
      house: 'Namdapha',
      post: 'House Web Admin'
    },
    {
      name: 'B.Rithika ',
      email: '21f1004002@student.onlinedegree.iitm.ac.in',
      house: 'Wayanad',
      post: 'House Deputy Secretary'
    },
    {
      name: 'Govind Soni',
      email: '21f1002864@student.onlinedegree.iitm.ac.in',
      house: 'Kaziranga',
      post: 'House Secretary'
    },
    {
      name: 'Yuvraj Sharma',
      email: '21f3000180@student.onlinedegree.iitm.ac.in',
      house: 'Namdapha',
      post: 'House Secretary'
    },
    {
      name: 'Ajeet Kumar',
      email: '21f1006807@student.onlinedegree.iitm.ac.in',
      house: 'Saranda',
      post: 'Mentor'
    },
    {
      name: 'Viswadeep V ',
      email: '21f1004116@student.onlinedegree.iitm.ac.in',
      house: 'Nilgiri',
      post: 'Mentor'
    },
    {
      name: 'Somya Dipayan Majhi',
      email: '21f1001048@student.onlinedegree.iitm.ac.in',
      house: 'Kaziranga',
      post: 'House Deputy Secretary'
    },
    {
      name: 'Maanav A',
      email: '21f1004840@student.onlinedegree.iitm.ac.in',
      house: 'Corbett',
      post: 'House Secretary'
    },
    {
      name: 'Prem Kumar Gupta',
      email: '22f1000659@student.onlinedegree.iitm.ac.in',
      house: 'Gir',
      post: 'House Web Admin'
    },
    {
      name: 'Pansuriya Tarang Bharatbhai',
      email: '21f1000913@student.onlinedegree.iitm.ac.in',
      house: 'Gir',
      post: 'House Deputy Secretary'
    },
    {
      name: 'Gouravajjula Sai Yaswanth ',
      email: '21f3001258@student.onlinedegree.iitm.ac.in',
      house: 'Kaziranga',
      post: 'House Secretary'
    },
    {
      name: 'Utkarsh Sahu ',
      email: '21f1001107@student.onlinedegree.iitm.ac.in',
      house: 'Nilgiri',
      post: 'House Web Admin'
    },
    {
      name: 'Uday Sai Tanna',
      email: '21f1003798@student.onlinedegree.iitm.ac.in',
      house: 'Kaziranga',
      post: 'House Deputy Secretary'
    },
    {
      name: 'Priyank Rajvansh',
      email: '21f1000163@student.onlinedegree.iitm.ac.in',
      house: 'Corbett',
      post: 'House Secretary'
    },
    {
      name: 'Vijay Suryakant Kapse',
      email: '21f1000202@student.onlinedegree.iitm.ac.in',
      house: 'Kaziranga',
      post: 'House Deputy Secretary'
    },
    {
      name: 'Aditya Phalnikar',
      email: '21f1003712@student.onlinedegree.iitm.ac.in',
      house: 'Pichavaram',
      post: 'House Secretary'
    },
    {
      name: 'VISHAKH AGARWAL',
      email: '21f1004811@student.onlinedegree.iitm.ac.in',
      house: 'Nilgiri',
      post: 'House Deputy Secretary'
    },
    {
      name: 'Vinayak Tiwari',
      email: '21f1000758@student.onlinedegree.iitm.ac.in',
      house: 'Kanha',
      post: 'House Web Admin'
    },
    {
      name: 'Pranjali Srivastava',
      email: '21f3000853@student.onlinedegree.iitm.ac.in',
      house: 'Pichavaram',
      post: 'House Secretary'
    },
    {
      name: 'Sakthivel',
      email: '21f3001697@student.onlinedegree.iitm.ac.in',
      house: 'Nilgiri',
      post: 'House Web Admin'
    },
    {
      name: 'S Manish',
      email: '21f3002911@student.onlinedegree.iitm.ac.in',
      house: 'Gir',
      post: 'House Web Admin'
    }
  ]
  return (
    <Layout>


        
        <Container bgColor="bg-color-maroon">
          <p className="display-5 text-center text-white">Vote for your House Representatives</p>
        </Container>

        <div className="w-100 d-flex justify-content-center align-items-center" style={{height:"70vh"}}>
          <h5 className="text-center">Elections are completed and the results will be published on 5 September, 2022. Thank you for casting your vote!</h5>
        </div>

      {/* <Container bgColor="bg-color-maroon">
        <p className="p-0 mt-4 display-6 text-center">IITM BS Elections 2022</p>
      </Container>
      <Container>
        <div className="d-inline-flex justify-content-center w-100" style={{overflow:"auto"}}>
          <table>
            <tr className="text-center">
              <th>Student ID</th>
              <th>Name</th>
              <th>Post</th>
              <th>House</th>
            </tr>
            {candidates.map((a) => {
              return (
                <tr key={a.email}>
                  <td className="px-2">{a.email.split("@")[0]}</td>
                  <td className="px-2">{a.name}</td>
                  <td className="px-2">{a.post}</td>
                  <td className="px-2">{a.house}</td>
                </tr>
              )
            })}
          </table>
        </div>
      </Container> */}

    </Layout>
  );
};

export default ElectionsPage;

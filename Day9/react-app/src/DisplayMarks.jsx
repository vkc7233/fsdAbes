import React from 'react'

const DisplayMarks = () => {
    const students =[
        {name:"Vineet", roll: 195 , m1:80 ,m2:76, m3:74},
        {name:"Vineet", roll: 195 , m1:80 ,m2:76, m3:74},
        {name:"Vineet", roll: 195 , m1:80 ,m2:76, m3:74},
        {name:"Vineet", roll: 195 , m1:80 ,m2:76, m3:74}

    ];
  return (
    <div>
        {students.map((students,index)=>(<Marks key={index} name={students.name} roll={students.roll} m1={students.m1} m2={students.m2} m3={students.m3}/>))}
    </div>
  );
};

export default DisplayMarks

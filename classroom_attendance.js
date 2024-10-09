function getStudents(classRoom) {
    const {hasTeachingAssistant, classList} = classRoom;
    return hasTeachingAssistant
        ? (([, , ...rest] = classList), rest)
        : (([, ...rest] = classList), rest);  
}

const classRoom = { 
    hasTeachingAssistant: true,
    classList: ["Arun", "Belmont","Musthaffa","Vazhmuni","Sivaraman","Mankandan","Balaji","John","Nandhini","Kamatchi"],
};

const students = getStudents(classRoom);
console.log(students);

function calculateFinalScore(obj) {
    if (typeof obj !== 'object'){ 
        return 'Invalid Input'; 
    }
    if (!obj.hasOwnProperty('name') ||  !obj.hasOwnProperty('testScore') || !obj.hasOwnProperty('schoolGrade') || !obj.hasOwnProperty('isFFamily')) {
        return 'Invalid Input';
    }
    if (typeof obj.name !== 'string') {
        return 'Invalid Input';
    }
    if (typeof obj.testScore !== 'number' || obj.testScore > 50) {
        return 'Invalid Input';
    }
    if (typeof obj.schoolGrade !== 'number' || obj.schoolGrade > 30) {
        return 'Invalid Input';
    }
    if (typeof obj.isFFamily !== 'boolean') {
        return 'Invalid Input';
    }
    let totalMarks = 0;
    fFamily = 0;
    fFamily = obj.isFFamily === true ? 20 : 0;
    totalMarks = obj.testScore + obj.schoolGrade + fFamily;
    return totalMarks >= 80 ? true : false;
}

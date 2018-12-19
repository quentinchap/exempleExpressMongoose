const MyLogger = ({req, res, next}) => {
    console.log('LOGGED');
    next();
  }
  
  export default MyLogger;
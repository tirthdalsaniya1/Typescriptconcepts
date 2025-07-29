import { Status } from './Typeexample3';


//Union Types demo
function handleStatus(status: Status): void {
    if (status === 'SUCCESS') console.log("✅ Passed");
    else if (status === 'FAIL') console.log("❌ Failed");
    else console.log("⌛ Pending");
}

handleStatus('SUCCESS'); // ✅
//handleStatus('LOADING'); // ❌ TypeScript error
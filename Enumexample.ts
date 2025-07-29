enum Status {
  Success = 'SUCCESS',
  Failure = 'FAILURE',
  Pending = 'PENDING'
}

function getStatusMessage(status: Status): string {
  switch (status) {
    case Status.Success:
      return 'Operation successful';
    case Status.Failure:
      return 'Operation failed';
    case Status.Pending:
      return 'Still in progress';
    default:
      return 'Unknown status';
  }
}

console.log(getStatusMessage(Status.Success)); // ✅ "Operation successful"
console.log(getStatusMessage(Status.Failure)); // ✅ "Operation successful"
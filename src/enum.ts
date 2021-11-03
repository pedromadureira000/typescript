const statuses = {
  notStarted: 0,
  inProgress: 1,
  done: 2,
};

enum Status { //capital letter is the default style
  NotStarted,
  InProgress,
  Done,
}

Status.Done; //R: 2

// We can use enum as value and data type
let notStartedStatus: Status = Status.NotStarted;
notStartedStatus = Status.Done;

// ------------------------/enum with strings/---------------------

enum StatusEnum { // Is good use Enum sufix
  NotStarted = "notStarted", //Assignment is with '='
  InProgress = "inProgress",
  Done = "done",
}

StatusEnum.Done; //R: 'done'

// We can use enum as value and data type
let notStartedStatusEnum: StatusEnum = StatusEnum.NotStarted;
notStartedStatusEnum = StatusEnum.Done;

// ------------------------/Enum with interfaces/---------------------
interface Task {
  id: string;
  status: StatusEnum;
}
// we can use enums for all constants in the application

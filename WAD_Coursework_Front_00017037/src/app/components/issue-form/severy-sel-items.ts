import { Severity } from "../../interfaces/issue.interface";

export const selectItems = [
  {
    label:'Minor',
    value:Severity.minor
  },
  {
    label:'Major',
    value:Severity.major
  },{
    label:'Critical',
    value:Severity.critical
  }
]

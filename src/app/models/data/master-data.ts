
import { Child } from './../child';
import { StepCodeMaster } from './../master';

export class MasterData {

  static masterdata: StepCodeMaster[] = [
    {
  code:'1',
  codeType:'PST',
  description:'Available'
    },
    {
        code:'2',
  codeType:'PST',
  description:'Sponsored'
    },
    {
        code:'3',
  codeType:'PST',
  description:'Onhold'
    },
    {
        code:'4',
        codeType:'PST',
        description:'Left-Program'
    }
  ];
}

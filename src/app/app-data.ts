import { InMemoryDbService } from 'angular-in-memory-web-api';


import { UserAccessData } from './models/data/user-access-data';
import { ChildData } from './models/data/child-data';
import { MasterData } from './models/data/master-data';

export class AppData implements InMemoryDbService {

  createDb() {
    const accessDetails = UserAccessData.accessDetails
    const children = ChildData.children;
    const masters = MasterData.masterdata;
    return {accessDetails , children, masters };
  }
}

import { Company, CompanyPreview, CompanySector } from '../../types/company';
import { getTestScore } from './score';

const testCompanyResults: CompanyPreview[] = [{
  id: '1',
  name: 'Amazon',
  sectors: [CompanySector.Cloud],
  scorePreview: {
    id: '1',
    value: 35.0,
  },
}, {
  id: '2',
  name: 'Good Local Company',
  sectors: [CompanySector.Dining],
  scorePreview: {
    id: '2',
    value: 95.0,
  },
}, {
  id: '3',
  name: 'Other big Tech Company',
  sectors: [CompanySector.Cloud],
  scorePreview: {
    id: '3',
    value: 60.0,
  },
}];

const company: { [id: string]: Company } = {
  1: {
    ...testCompanyResults[0],
    description: 'test description',
    scores: [getTestScore('1')],
  },
  2: {
    ...testCompanyResults[1],
    description: 'test description',
    scores: [getTestScore('2')],
  },
  3: {
    ...testCompanyResults[2],
    description: 'test description',
    scores: [getTestScore('3')],
  },
};

const getTestCompany = (id: string): Company => company[id];

export {
  getTestCompany,
  testCompanyResults,
};

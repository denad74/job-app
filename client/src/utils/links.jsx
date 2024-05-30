import { FaWpforms } from 'react-icons/fa';
import { MdQueryStats } from 'react-icons/md';
import { IoBarChartSharp } from 'react-icons/io5';
import { ImProfile } from 'react-icons/im';
import { MdAdminPanelSettings } from 'react-icons/md'

const links = [
    { id: 0, text: 'add job', path: '.', icon: <FaWpforms /> },
    { id: 1, text: 'all jobs', path: 'all-jobs', icon: <MdQueryStats /> },
    { id: 2, text: 'stats', path: 'stats', icon: <IoBarChartSharp/> },
    { id: 3, text: 'profile', path: 'profile', icon: <ImProfile /> },
    { id: 4, text: 'admin', path: 'admin', icon: <MdAdminPanelSettings /> },
];

export default links;

import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import TimelineIcon from '@mui/icons-material/Timeline';
import PeopleOutlineSharpIcon from '@mui/icons-material/PeopleOutlineSharp';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';

type OptionType = {
    id: number
    text: string
    value: number
}
  
export const optionsData: Array<OptionType> = [
    {id: 1, text: '3 дня', value: 3},
    {id: 2, text: 'Неделя', value: 7},
    {id: 3, text: 'Месяц', value: 30},
    {id: 4, text: 'Год', value: 365},
];

export const cellsData = [
    { id: 1, text: 'Тип' },
    { id: 2, text: 'Время' },
    { id: 3, text: 'Сотрудник' },
    { id: 4, text: 'Звонок' },
    { id: 5, text: 'Источник' },
    { id: 6, text: 'Оценка' },
    { id: 7, text: '' },
    { id: 8, text: 'Длительность' },
];

export const staticsData = [
    { id: 1, text: 'Новые звонки', description: '20 из 30 шт', color: 'green' },
    { id: 2, text: 'Качество разговоров', description: '40%', color: 'yellow' },
    { id: 3, text: 'Конверсия в заказ', description: '67%', color: 'red' },
];

export const MenuListData = [
    { id: 1, img: TimelineIcon, text: 'Итого' },
    { id: 2, img: DoneAllIcon, text: 'Заказы' },
    { id: 3, img: MailOutlinedIcon, text: 'Сообщения' },
    { id: 4, img: CallOutlinedIcon, text: 'Звонки' },
    { id: 5, img: PeopleOutlineSharpIcon, text: 'Контрагенты' },
    { id: 6, img: DescriptionOutlinedIcon, text: 'Документы' },
    { id: 7, img: PermIdentityOutlinedIcon, text: 'Исполнители' },
    { id: 8, img: WorkOutlineOutlinedIcon, text: 'Отчеты' },
    { id: 9, img: LocalLibraryOutlinedIcon, text: 'База знаний' },
    { id: 10, img: SettingsOutlinedIcon, text: 'Настройки' },
];
import { 
    Subject as DocumentIcon,
    Badge as CertificateIcon,
    Source as CodeIcon,
    Handshake as SharedCodeIcon,
    DocumentScanner as ExampleDocIcon,
    HelpCenter as HelpIcon,
    SupportAgent as SupportIcon,
    RecentActors as ContactsIcon
} from '@mui/icons-material';

const menuItems = [
    { menu: 'Таможенное оформление', label: 'submissions', icon: <DocumentIcon/> },
    { menu: 'Сертификация груза', label: 'certification', icon: <CertificateIcon/> },
    { menu: 'Онлайн поддержка', label: 'support', icon: <SupportIcon/> },
    { menu: 'Определение кода ТНВ', label: false, icon: <CodeIcon/> },
    { menu: 'Подготовка контракта', label: false, icon: <SharedCodeIcon/> },
    { menu: 'Образцы документов', label: false, icon: <ExampleDocIcon/> },
    { menu: 'Помощь', label: false, icon: <HelpIcon/> },
    { menu: 'Контакты', label: false, icon: <ContactsIcon/> },
];

export default menuItems;
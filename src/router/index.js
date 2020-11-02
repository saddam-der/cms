import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';

//----------------------------Apps-------------
//Calendar
import Calendar from '@/components/apps/Calendar/Calendar';

//Chat
import Chat from '@/components/apps/Chat/Chat';

//Task
import TaskDetails from '@/components/apps/Tasks/Task-Details';
import TaskKanbanBoard from '@/components/apps/Tasks/Task-KanbanBoard';
import TaskList from '@/components/apps/Tasks/Task-List';

//Tickets
import TicketsDetail from '@/components/apps/Tickets/Tickets-Detail';
import TicketsList from '@/components/apps/Tickets/Tickets-List';

//-------------------------Components-----------
//Base Ui
import UiAvatars from '@/components/components/Base UI/Ui-Avatars';
import UiButtons from '@/components/components/Base UI/Ui-Buttons';
import UiCards from '@/components/components/Base UI/Ui-Cards';
import UiCarousel from '@/components/components/Base UI/Ui-Carousel';
import UiDropdowns from '@/components/components/Base UI/Ui-Dropdowns';
import UiGeneral from '@/components/components/Base UI/Ui-General';
import UiGid from '@/components/components/Base UI/Ui-Gid';
import UiImages from '@/components/components/Base UI/Ui-Images';
import UiListGroup from '@/components/components/Base UI/Ui-List-Group';
import UiModals from '@/components/components/Base UI/Ui-Modals';
import UiNotifications from '@/components/components/Base UI/Ui-Notifications';
import UiPortlets from '@/components/components/Base UI/Ui-Portlets';
import UiProgress from '@/components/components/Base UI/Ui-Progress';
import UiRibbons from '@/components/components/Base UI/Ui-Ribbons';
import UiSpinners from '@/components/components/Base UI/Ui-Spinners';
import UiTabsAccordions from '@/components/components/Base UI/Ui-Tabs-Accordions';
import UiTooltipsPopovers from '@/components/components/Base UI/Ui-Tooltips-Popovers';
import UiTypography from '@/components/components/Base UI/Ui-Typography';
import UiVideo from '@/components/components/Base UI/Ui-Video';

//Extended UI
import ExtendedAnimation from '@/components/components/Extended UI/Extended-Animation';
import ExtendedDragula from '@/components/components/Extended UI/Extended-Dragula';
import ExtendedLoadingButtons from '@/components/components/Extended UI/Extended-Loading-Buttons';
import ExtendedNestable from '@/components/components/Extended UI/Extended-Nestable';
import ExtendedRangeSlider from '@/components/components/Extended UI/Extended-Range-Slider';
import ExtendedScrollspy from '@/components/components/Extended UI/Extended-Scrollspy';
import ExtendedSweetAlert from '@/components/components/Extended UI/Extended-Sweet-Alert';
import ExtendedTour from '@/components/components/Extended UI/Extended-Tour';

//Widgets
import Widgets from '@/components/components/Widgets/Widgets';

//Icons
import IconsDripicons from '@/components/components/Icons/Icons-Dripicons';
import IconsFeather from '@/components/components/Icons/Icons-Feather';
import IconsFontAwesome from '@/components/components/Icons/Icons-Font-Awesome';
import IconsMdi from '@/components/components/Icons/Icons-Mdi';
import IconsSimpleLine from '@/components/components/Icons/Icons-Simple-Line';
import IconsThemify from '@/components/components/Icons/Icons-Themify';
import IconsTwoTone from '@/components/components/Icons/Icons-Two-Tone';
import IconsWeather from '@/components/components/Icons/Icons-Weather';

//Forms
import FormsAdvanced from '@/components/components/Forms/Forms-Advanced';
import FormsElements from '@/components/components/Forms/Forms-Elements';
import FormsFileUploads from '@/components/components/Forms/Forms-File-Uploads';
import FormsImageCrop from '@/components/components/Forms/Forms-Image-Crop';
import FormsMasks from '@/components/components/Forms/Forms-Masks';
import FormsPickers from '@/components/components/Forms/Forms-Pickers';
import FormsQuilljs from '@/components/components/Forms/Forms-Quilljs';
import FormsSummernote from '@/components/components/Forms/Forms-Summernote';
import FormsValidation from '@/components/components/Forms/Forms-Validation';
import FormsWizard from '@/components/components/Forms/Forms-Wizard';

//Tables
import TableBasic from '@/components/components/Tables/Table-Basic';
import TableBootstrap from '@/components/components/Tables/Table-Bootstrap';
import TableDatatables from '@/components/components/Tables/Table-Datatables';
import TableEditable from '@/components/components/Tables/Table-Editable';
import TableFootables from '@/components/components/Tables/Table-Footables';
import TableJsgrid from '@/components/components/Tables/Table-Jsgrid';
import TableResponsive from '@/components/components/Tables/Table-Responsive';
import TableTablesaw from '@/components/components/Tables/Table-Tablesaw';

//Charts
import ChartsApex from '@/components/components/Charts/Charts-Apex';
import ChartsC3 from '@/components/components/Charts/Charts-C3';
import ChartsChartist from '@/components/components/Charts/Charts-Chartist';
import ChartsChartjs from '@/components/components/Charts/Charts-Chartjs';
import ChartsFlot from '@/components/components/Charts/Charts-Flot';
import ChartsKnob from '@/components/components/Charts/Charts-Knob';
import ChartsMorris from '@/components/components/Charts/Charts-Morris';
import ChartsPeity from '@/components/components/Charts/Charts-Peity';
import ChartsSparklines from '@/components/components/Charts/Charts-Sparklines';

//Maps
import MapsGoogle from '@/components/components/Maps/Maps-Google';
import MapsMapael from '@/components/components/Maps/Maps-Mapael';
import MapsVector from '@/components/components/Maps/Maps-Vector';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },

    //Apps
    {
      path: '/calendar',
      name: 'Calendar',
      component: Calendar,
    },

    {
      path: '/chat',
      name: 'Chat',
      component: Chat,
    },

    {
      path: '/task-details',
      name: 'TaskDetails',
      component: TaskDetails,
    },
    {
      path: '/task-kanban-board',
      name: 'TaskKanbanBoard',
      component: TaskKanbanBoard,
    },

    {
      path: '/task-list',
      name: 'TaskList',
      component: TaskList,
    },
    {
      path: '/tickets-detail',
      name: 'TicketsDetail',
      component: TicketsDetail,
    },
    {
      path: '/tickets-list',
      name: 'TicketsList',
      component: TicketsList,
    },

    //Components
    {
      path: '/ui-avatars',
      name: 'UiAvatars',
      component: UiAvatars,
    },
    {
      path: '/ui-buttons',
      name: 'UiButtons',
      component: UiButtons,
    },
    {
      path: '/ui-cards',
      name: 'UiCards',
      component: UiCards,
    },
    {
      path: '/ui-carousel',
      name: 'UiCarousel',
      component: UiCarousel,
    },
    {
      path: '/ui-dropdowns',
      name: 'UiDropdowns',
      component: UiDropdowns,
    },
    {
      path: '/ui-general',
      name: 'UiGeneral',
      component: UiGeneral,
    },
    {
      path: '/ui-gid',
      name: 'UiGid',
      component: UiGid,
    },
    {
      path: '/ui-images',
      name: 'UiImages',
      component: UiImages,
    },
    {
      path: '/ui-list-group',
      name: 'UiListGroup',
      component: UiListGroup,
    },
    {
      path: '/ui-modals',
      name: 'UiModals',
      component: UiModals,
    },
    {
      path: '/ui-notifications',
      name: 'UiNotifications',
      component: UiNotifications,
    },
    {
      path: '/ui-portlets',
      name: 'UiPortlets',
      component: UiPortlets,
    },
    {
      path: '/ui-progress',
      name: 'UiProgress',
      component: UiProgress,
    },
    {
      path: '/ui-ribbons',
      name: 'UiRibbons',
      component: UiRibbons,
    },
    {
      path: '/ui-spinners',
      name: 'UiSpinners',
      component: UiSpinners,
    },
    {
      path: '/ui-tabs-accordions',
      name: 'UiTabsAccordions',
      component: UiTabsAccordions,
    },
    {
      path: '/ui-tooltips-popovers',
      name: 'UiTooltipsPopovers',
      component: UiTooltipsPopovers,
    },
    {
      path: '/ui-typography',
      name: 'UiTypography',
      component: UiTypography,
    },
    {
      path: '/ui-video',
      name: 'UiVideo',
      component: UiVideo,
    },

    {
      path: '/extended-animation',
      name: 'ExtendedAnimation',
      component: ExtendedAnimation,
    },
    {
      path: '/extended-dragula',
      name: 'ExtendedDragula',
      component: ExtendedDragula,
    },
    {
      path: '/extended-loading-buttons',
      name: 'ExtendedLoadingButtons',
      component: ExtendedLoadingButtons,
    },
    {
      path: '/extended-nestable',
      name: 'ExtendedNestable',
      component: ExtendedNestable,
    },
    // {
    //   path: '/extended-rangel-slider',
    //   name: 'ExtendedRangelSlider',
    //   component: ExtendedRangelSlider,
    // },
    {
      path: '/extended-scrollspy',
      name: 'ExtendedScrollspy',
      component: ExtendedScrollspy,
    },
    // {
    //   path: '/extended-sweet-alert',
    //   name: 'ExtendedSweeAlert',
    //   component: ExtendedSweeAlert,
    // },
    {
      path: '/extended-tour',
      name: 'ExtendedTour',
      component: ExtendedTour,
    },
  ],
});

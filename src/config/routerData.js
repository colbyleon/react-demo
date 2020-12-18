import Home from "../pages/home";
import Buttons from "../pages/ui/buttons";
import Modals from '../pages/ui/modals'
import Loading from '../pages/ui/loading'
import Notice from "../pages/ui/notice";
import Message from "../pages/ui/message";
import STabs from "../pages/ui/stabs";
import Gallery from "../pages/ui/gallery";
import Carousel from "../pages/ui/carousel";
import FormLogin from "../pages/form/login";
import RegisterForm from "../pages/form/register";
import BasicTable from "../pages/table/basicTable";

const routerData = {
  contentLayout: [
    {
      path: "/home",
      component: Home
    }, {
      path: "/ui/buttons",
      component: Buttons
    }, {
      path: "/ui/modals",
      component: Modals
    }, {
      path: "/ui/loadings",
      component: Loading,
    }, {
      path: "/ui/notification",
      component: Notice
    }, {
      path: "/ui/messages",
      component: Message
    }, {
      path: "/ui/tabs",
      component: STabs
    }, {
      path: "/ui/gallery",
      component: Gallery
    }, {
      path: "/ui/carousel",
      component: Carousel
    }, {
      path: "/form/login",
      component: FormLogin
    }, {
      path: "/form/reg",
      component: RegisterForm
    }, {
      path: "/table/basic",
      component: BasicTable
    }
  ]
}

const contentLayout = routerData.contentLayout;

export {contentLayout}
export default routerData;
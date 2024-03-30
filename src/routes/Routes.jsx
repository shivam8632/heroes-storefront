import { Routes, Route } from 'react-router-dom';
import Header from '../components/header/Header';
import Home from '../components/home/Home';
import Footer from '../components/footer/Footer';
import SignUp from '../components/signup/Signup';
import SignIn from '../components/signin/SignIn';
import CategoryList from '../components/categories/category-list/CategoriesList';
import CategoryProduct from '../components/categories/category-product/CategoryProduct';
import Profile from '../components/profile/Profile';
import Forget from '../components/passwords/forget/Forget';
import Membership from '../components/membership/Membership';
import NotFound from '../components/404/NotFound';
import Product from '../components/product/Product';
import AllProduct from '../components/product/all-products/ProductsAll';
import AboutUs from '../components/aboutus/AboutUs';
import FAQ from '../components/faq/FAQ';
import PrivacyPolicy from '../components/privacypolicy/PrivacyPolicy';
import ContactUs from '../components/contactus/ContactUs';
import Cart from '../components/cart/Cart';
import Checkout from '../components/checkout/Checkout';
import Thanks from '../components/thank you/Thanks';
import Discover from '../components/discover/Discover';
import DiscoverDetail from '../components/discover/discover-detail/DiscoverDetail';
import EventDetailTest from '../components/discover/discover-detail/EventDetailTest';
import RefundPolicy from '../components/refundpolicy/RefundPolicy';
import TermsOfService from '../components/termsofservice/TermsOfService';
import PaymentSummary from '../components/paymentsummary/PaymentSummary';
import ProfileDetail from '../components/profile/account-details/AccountDetails';
import OrderHistory from '../components/profile/order/OrderHistory';
import Recruiter from '../components/recruiter/Recruiter';
import RecruiterSeeker from '../components/recruiter/recruiterSeeker/RecruiterSeeker';
import RecruiterSignup from '../components/recruiter/recruiterSignup/RecruiterSignup';

const Routing = () => {
  return (
      
    <div className="routes">
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/*' element={<NotFound />} />
        <Route path ='/signin' element={<SignIn />} />
        <Route path ='/signup' element={<SignUp />} />
        <Route path ='/categories' element={<CategoryList />} />
        <Route path ='/learn/:id?' element={<CategoryProduct />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/forget' element={<Forget />} />
        <Route path='/membership' element={<Membership />} />
        <Route path='/product-detail/:id' element={<Product />} />
        <Route path='/all-products' element={<AllProduct />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='/privacypolicy' element={<PrivacyPolicy />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/thank-you' element={<Thanks />} />
        <Route path='/discover' element={<Discover />} />
        <Route path='/discover-detail/:id' element={<DiscoverDetail />} />
        <Route path='/event-detail-test/:id' element={<EventDetailTest />} />
        <Route path='/refundpolicy' element= {<RefundPolicy />} />
        <Route path='/termsofservice' element= {<TermsOfService />} />
        <Route path='/paymentsummary/:id?' element= {<PaymentSummary />} />
        <Route path='/profile-detail' element={<ProfileDetail />} />
        <Route path='/order-history' element={<OrderHistory />} />
        <Route path='/recruiter' element={<Recruiter />} />
        <Route path='/recruiter-signup' element={<RecruiterSignup />} />
        <Route path='/recruiter-seeker' element={<RecruiterSeeker />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Routing;
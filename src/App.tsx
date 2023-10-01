import Layout from './components/Layout/Layout';
import {Routes, Route} from 'react-router-dom';
import Entries from './pages/Entries/Entries';
import Charts from './pages/Charts/Charts';
import ViewEntriesAll from './pages/Entries/ViewEntriesAll';
import ViewEntrySingle from './pages/Entries/ViewEntrySingle';
import EditEntry from './pages/Entries/EditEntry';

// type Props = {
//   children: React.ReactNode;
// };

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="entries" element={<Entries />} />
          <Route path="entries/view-all" element={<ViewEntriesAll />} />
          <Route path="entries/view-single/:id" element={<ViewEntrySingle />} />
          <Route path="entries/edit" element={<EditEntry />} />
          <Route path="/charts" element={<Charts />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;

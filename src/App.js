import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Container, Header, Content, Sidebar, Nav, Sidenav } from 'rsuite';
import ToolsIcon from '@rsuite/icons/Tools';
import ImageIcon from '@rsuite/icons/Image';
import MediaIcon from '@rsuite/icons/Media';
import LottiePage from './pages/lottie';
import GifPage from './pages/gif';
import WebpPage from './pages/webp';

const headerStyles = {
  padding: 7,
  fontSize: 16,
  height: 36,
  background: '#0473af',
  color: ' #fff',
  whiteSpace: 'nowrap',
  textAlign: 'center',
  overflow: 'hidden'
};

const App = () => {
  const location = useLocation();
  const title = `${location.pathname.substring(1, location.pathname.length) || 'lottie'} performance benchmark page`;
  const moveTo = (path) => window.location.href = path;

  return (
    <div className="show-fake-browser sidebar-page" style={{ height: '100%' }}>
      <Container style={{ height: '100%' }}>
        <Sidebar
          style={{ display: 'flex', flexDirection: 'column' }}
          width={200}
        >
          <Sidenav.Header>
            <div style={headerStyles}>
              <ToolsIcon style={{ marginRight: 8 }} />
              Benchmark
            </div>
          </Sidenav.Header>
          <Sidenav appearance="subtle">
            <Sidenav.Body>
              <Nav activeKey={location.pathname}>
                <Nav.Item eventKey="/" icon={<MediaIcon />} onClick={() => moveTo('/')}>Lottie</Nav.Item>
                <Nav.Item eventKey="/gif" icon={<ImageIcon />} onClick={() => moveTo('/gif')}>GIF</Nav.Item>
                <Nav.Item eventKey="/webp" icon={<ImageIcon />} onClick={() => moveTo('/webp')}>WebP</Nav.Item>
              </Nav>
            </Sidenav.Body>
          </Sidenav>
        </Sidebar>

        <Container>
          <Header style={{ paddingLeft: 10 }}>
            <h2>{title}</h2>
          </Header>

          <Content style={{ height: '100%' }}>
            <Routes>
              <Route exact path="/" element={<LottiePage />} />
              <Route exact path="/gif" element={<GifPage />} />
              <Route exact path="/webp" element={<WebpPage />} />
            </Routes>
          </Content>
        </Container>
      </Container>
    </div>
  );
};

export default App;
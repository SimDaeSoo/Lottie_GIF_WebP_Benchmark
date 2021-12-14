import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
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
  const [title, setTitle] = useState('Lottie Performance Benchmark');
  const [path, setPath] = useState('lottie');

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
              <Nav activeKey={path}>
                <Nav.Item eventKey="lottie" icon={<MediaIcon />}>Lottie</Nav.Item>
                <Nav.Item eventKey="gif" icon={<ImageIcon />}>GIF</Nav.Item>
                <Nav.Item eventKey="webp" icon={<ImageIcon />}>WebP</Nav.Item>
              </Nav>
            </Sidenav.Body>
          </Sidenav>
        </Sidebar>

        <Container>
          <Header style={{ paddingLeft: 10 }}>
            <h2>{title}</h2>
          </Header>

          <Content style={{ height: '100%', backgroundColor: '#303030' }}>
            <Routes>
              <Route exact path="lottie" element={<LottiePage />} />
              <Route exact path="gif" element={<GifPage />} />
              <Route exact path="webp" element={<WebpPage />} />
            </Routes>
          </Content>
        </Container>
      </Container>
    </div>
  );
};

export default App;
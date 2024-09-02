import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import FilterButtons from './components/FilterButtons';
import DarkModeToggle from './components/DarkModeToggle';
import { Layout } from 'antd';
import './App.css';

const { Header, Content, Footer } = Layout;

const App = () => {
  const [filter, setFilter] = useState('ALL');

  return (
    <Layout className="layout">
      <Header>
        <h1 style={{ color: 'white' }}>Todo List</h1>
        <DarkModeToggle />
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">
          <TaskForm />
          <FilterButtons setFilter={setFilter} />
          <TaskList filter={filter} />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Todo App ©2024</Footer>
    </Layout>
  );
};

export default App;

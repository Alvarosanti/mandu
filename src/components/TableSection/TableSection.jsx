import React, { useContext, useState, useEffect, useRef } from 'react';
import './TableSection.css';
import { Cascader, Layout, Table, Input, InputNumber, Form, Typography, Button, Popconfirm,  Row, Col} from 'antd';
import { Tabs, Radio  } from 'antd';
import { DownloadOutlined, PlusSquareOutlined, PlusOutlined, UploadOutlined} from '@ant-design/icons';


function TableSection(){
const { TabPane } = Tabs;
const { Search } = Input;

//expandedrowrender
/*
const expandedRowRender = () =>{
  const columneExpanded = [
    { title: 'Date', dataIndex: 'date', key: 'data'},
    { title: 'Name', dataIndex: 'name', key: 'name' },
  ]
  const dataExpanded = [
    {key:1, date:'2021-10-20 20:00:00',name:'Product Name'}
  ]
  return <Table columns={columneExpanded} dataSource={dataExpanded} pagination={false} />;
}
*/
//table


const [dataSource, setDataSource] = useState([
  {
     key: '1',
     division: 'CEO',
     divisionSuperior: 'Direccion general',
     colab: 1,
     nivel: '1',
     subdivisiones: 1,
     embajadores: 'Jordyn Herwitz'
   },
   {
     key: '2',
     division: 'Strategy',
     divisionSuperior: 'Direccion general',
     colab: 3,
     nivel: '4',
     subdivisiones: 1,
     embajadores: 'Kierra Rosser'
   },
   {
     key: '3',
     division: 'Growth',
     divisionSuperior: 'Direccion general',
     colab: 3,
     nivel: '2',
     subdivisiones: 1,
     embajadores: '-'
   },
   {
     key: '4',
     division: 'Strategy',
     divisionSuperior: 'Producto',
     colab: 6,
     nivel: '1',
     subdivisiones: 4,
     embajadores: '-'
   },
   {
     key: '5',
     division: 'Growth',
     divisionSuperior: 'Operaciones',
     colab: 8,
     nivel: '5',
     subdivisiones: 4,
     embajadores: '-'
   },
   {
     key: '6',
     division: 'CEO',
     divisionSuperior: 'Operaciones',
     colab: 2,
     nivel: '1',
     subdivisiones: 1,
     embajadores: 'Terry Press'
   },


]);

const columns = [
  {
    title: 'Division',
    dataIndex: 'division',
    sorter: (a, b) => a.division - b.division,
    filters: [
      {
        text: 'CEO',
        value: 'CEO',
      },
      {
        text: 'Strategy',
        value: 'Strategy',
      },
      {
        text: 'Producto',
        value: 'Producto',
      },
      {
        text: 'Growth',
        value: 'Growth',
      },
    ],
    filterMode: 'tree',
    filterSearch: true,
    onFilter: (value, record) => record.division.includes(value),
    width: '20%',
  },
  {
    title: 'Division superior',
    dataIndex: 'divisionSuperior',
    sorter: (a, b) => a.divisionSuperior - b.divisionSuperior,
    filters: [
      {
        text: 'Direccion general',
        value: 'Direccion general',
      },
      {
        text: 'Strategy',
        value: 'Strategy',
      },
      {
        text: 'Producto',
        value: 'Producto',
      },
      {
        text: 'Operaciones',
        value: 'Operaciones',
      },
    ],
    filterMode: 'tree',
    filterSearch: true,
    onFilter: (value, record) => record.divisionSuperior.includes(value),
    width: '20%',
  },
  {
    title: 'Colaboradores',
    dataIndex: 'colab',
    sorter: (a, b) => a.colab - b.colab,
  },
  {
    title: 'Nivel',
    dataIndex: 'nivel',
    sorter: (a, b) => a.nivel - b.nivel,
    filters: [
      {
        text: '1',
        value: '1',
      },
      {
        text: '2',
        value: '2',
      },
      {
        text: '4',
        value: '4',
      },
      {
        text: '5',
        value: '5',
      },
      
    ],
    filterMode: 'tree',
    filterSearch: true,
    onFilter: (value, record) => record.nivel.includes(value),
    width: '10%',
  },
  {
    title: 'Subdivisiones',
    dataIndex: 'subdivisiones',
    sorter: (a, b) => a.subdivisiones - b.subdivisiones,
  },
  {
    title: 'Embajadores',
    dataIndex: 'embajadores'
  },
];

function onChange(pagination, filters, sorter, extra) {
  console.log('params', pagination, filters, sorter, extra);
}
//end table

//input search
const onSearch = value => console.log(value);

//column option
const options = [
  {
    value: 'otros',
    label: 'otros',
  },
];

const TableSection1 = () => (
  <Tabs defaultActiveKey="1">
    <TabPane tab="Divisiones" key="1">
    <div className='backgroundtable'>
      <Row>
        <Col span={6}>
          <Radio.Group  style={{marginTop:15,marginLeft:15,marginBottom:50}}>
                <Radio.Button value="top">Listado</Radio.Button>
                <Radio.Button value="left">Arbol</Radio.Button>
            </Radio.Group>
        </Col>
        <Col span={5}></Col>
        <Col span={6}></Col>
        <Col span={6}>
          <Cascader options={options} placeholder="Columnas" style={{ width: 150, marginTop:5,marginLeft:10}} />
          <Search placeholder="Buscar" allowClear onSearch={onSearch} style={{ width: 200 , marginTop:5,marginLeft:10}} />
        </Col>
      </Row> 
      <Table bordered columns={columns} dataSource={dataSource} onChange={onChange} rowSelection={true} />
    </div>
    </TabPane>
    <TabPane tab="Colaboradores" key="2">
      Colaboradores
    </TabPane>
  </Tabs>
);

    return(
        <>
          <Row style={{marginTop: 30, fontWeight:500, fontSize:17}}>
            <Col span={2}>Oganizacion</Col>
            <Col span={10}></Col>
            <Col span={9}></Col>
            <Col span={3} style={{marginTop:15}}>
              <Button type="primary" icon={<PlusOutlined />} size='middle'style={{marginRight:10}} />
              <Button type="primary" icon={<UploadOutlined />} size='middle' ghost style={{marginRight:10}}/>
              <Button type="primary" icon={<DownloadOutlined />} size='middle' ghost style={{marginRight:10}}/>
            </Col>
          </Row>
          <div className='site-layout-table'>
            <TableSection1 />
          </div>
    </>
    )
}
export default TableSection;

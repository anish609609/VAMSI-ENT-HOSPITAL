import React, { useState } from 'react';
import { 
  Users, 
  Calendar, 
  FileText, 
  Settings, 
  LogOut, 
  Plus, 
  Search, 
  Filter,
  Eye,
  Edit,
  Trash2,
  TrendingUp,
  Activity,
  DollarSign,
  X,
  Save,
  UserPlus,
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const AdminDashboard = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddPatient, setShowAddPatient] = useState(false);
  const [showAddAppointment, setShowAddAppointment] = useState(false);
  const [editingPatient, setEditingPatient] = useState(null);
  const [editingAppointment, setEditingAppointment] = useState(null);

  // Mock data for demonstration
  const [patients, setPatients] = useState([
    { id: 1, name: 'Rahul Sharma', age: 45, condition: 'Chronic Sinusitis', status: 'Under Treatment', date: '2024-01-15', phone: '+91 98765 43210', email: 'rahul@email.com' },
    { id: 2, name: 'Priya Patel', age: 32, condition: 'Hearing Loss', status: 'Recovered', date: '2024-01-14', phone: '+91 98765 43211', email: 'priya@email.com' },
    { id: 3, name: 'Amit Kumar', age: 28, condition: 'Sleep Apnea', status: 'Under Treatment', date: '2024-01-13', phone: '+91 98765 43212', email: 'amit@email.com' },
    { id: 4, name: 'Sneha Reddy', age: 35, condition: 'Voice Disorder', status: 'Scheduled', date: '2024-01-12', phone: '+91 98765 43213', email: 'sneha@email.com' },
    { id: 5, name: 'Rajesh Verma', age: 50, condition: 'Thyroid Surgery', status: 'Completed', date: '2024-01-11', phone: '+91 98765 43214', email: 'rajesh@email.com' }
  ]);

  const [appointments, setAppointments] = useState([
    { id: 1, patient: 'Meera Singh', doctor: 'Dr. Vamsi Krishna', time: '09:00 AM', date: '2024-01-20', type: 'Consultation', status: 'Scheduled' },
    { id: 2, patient: 'Vikram Malhotra', doctor: 'Dr. Priya Sharma', time: '10:30 AM', date: '2024-01-20', type: 'Follow-up', status: 'Scheduled' },
    { id: 3, patient: 'Anjali Desai', doctor: 'Dr. Rajesh Kumar', time: '02:00 PM', date: '2024-01-20', type: 'Surgery', status: 'Confirmed' },
    { id: 4, patient: 'Karan Johar', doctor: 'Dr. Anjali Patel', time: '04:30 PM', date: '2024-01-20', type: 'Consultation', status: 'Pending' }
  ]);

  const [medicalRecords, setMedicalRecords] = useState([
    { id: 1, patientId: 1, patientName: 'Rahul Sharma', diagnosis: 'Chronic Sinusitis', treatment: 'Endoscopic Sinus Surgery', date: '2024-01-15', doctor: 'Dr. Vamsi Krishna' },
    { id: 2, patientId: 2, patientName: 'Priya Patel', diagnosis: 'Sensorineural Hearing Loss', treatment: 'Cochlear Implant', date: '2024-01-14', doctor: 'Dr. Vamsi Krishna' },
    { id: 3, patientId: 3, patientName: 'Amit Kumar', diagnosis: 'Obstructive Sleep Apnea', treatment: 'CPAP Therapy', date: '2024-01-13', doctor: 'Dr. Rajesh Kumar' }
  ]);

  const [drugInventory, setDrugInventory] = useState([
    { id: 1, name: 'Paracetamol', quantity: 500, unit: 'tablets', lastUpdated: '2024-01-20', expiryDate: '2025-06-20' },
    { id: 2, name: 'Amoxicillin', quantity: 200, unit: 'capsules', lastUpdated: '2024-01-19', expiryDate: '2025-03-19' },
    { id: 3, name: 'Ibuprofen', quantity: 300, unit: 'tablets', lastUpdated: '2024-01-18', expiryDate: '2025-05-18' },
    { id: 4, name: 'Omeprazole', quantity: 150, unit: 'capsules', lastUpdated: '2024-01-17', expiryDate: '2025-04-17' }
  ]);

  const [surgeryRecords, setSurgeryRecords] = useState([
    { id: 'S001', date: '2024-01-10', type: 'Endoscopic Sinus Surgery', doctor: 'Dr. Vamsi Krishna', patient: 'Rahul Sharma', outcome: 'Successful' },
    { id: 'S002', date: '2024-01-12', type: 'Cochlear Implant', doctor: 'Dr. Vamsi Krishna', patient: 'Priya Patel', outcome: 'Successful' },
    { id: 'S003', date: '2024-01-14', type: 'Tonsillectomy', doctor: 'Dr. Priya Sharma', patient: 'Amit Kumar', outcome: 'Successful' }
  ]);

  const stats = [
    { icon: Users, label: 'Total Patients', value: patients.length.toString(), change: '+12%', color: 'primary' },
    { icon: Calendar, label: 'Today\'s Appointments', value: appointments.filter(a => a.date === '2024-01-20').length.toString(), change: '+5%', color: 'accent' },
    { icon: Activity, label: 'Active Cases', value: patients.filter(p => p.status === 'Under Treatment').length.toString(), change: '-3%', color: 'yellow' },
    { icon: DollarSign, label: 'Monthly Revenue', value: '₹2.4M', change: '+18%', color: 'green' }
  ];

  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.condition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status) => {
    switch (status) {
      case 'Under Treatment': return 'bg-blue-100 text-blue-800';
      case 'Recovered': return 'bg-green-100 text-green-800';
      case 'Scheduled': return 'bg-yellow-100 text-yellow-800';
      case 'Completed': return 'bg-gray-100 text-gray-800';
      case 'Confirmed': return 'bg-green-100 text-green-800';
      case 'Pending': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  // Patient Management Functions
  const addPatient = (patientData) => {
    const newPatient = {
      id: patients.length + 1,
      ...patientData,
      date: new Date().toISOString().split('T')[0]
    };
    setPatients([...patients, newPatient]);
    setShowAddPatient(false);
  };

  const updatePatient = (patientData) => {
    setPatients(patients.map(p => p.id === patientData.id ? patientData : p));
    setEditingPatient(null);
  };

  const deletePatient = (patientId) => {
    if (window.confirm('Are you sure you want to delete this patient?')) {
      setPatients(patients.filter(p => p.id !== patientId));
    }
  };

  // Appointment Management Functions
  const addAppointment = (appointmentData) => {
    const newAppointment = {
      id: appointments.length + 1,
      ...appointmentData,
      status: 'Scheduled'
    };
    setAppointments([...appointments, newAppointment]);
    setShowAddAppointment(false);
  };

  const updateAppointment = (appointmentData) => {
    setAppointments(appointments.map(a => a.id === appointmentData.id ? appointmentData : a));
    setEditingAppointment(null);
  };

  const deleteAppointment = (appointmentId) => {
    if (window.confirm('Are you sure you want to delete this appointment?')) {
      setAppointments(appointments.filter(a => a.id !== appointmentId));
    }
  };

  // Add Patient Form Component
  const AddPatientForm = ({ onSubmit, onCancel, initialData = null }) => {
    const [formData, setFormData] = useState(initialData || {
      name: '', age: '', condition: '', status: 'Scheduled', phone: '', email: ''
    });

    const handleSubmit = () => {
      if (formData.name && formData.age && formData.condition) {
        onSubmit(formData);
      } else {
        alert('Please fill in all required fields');
      }
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-xl p-6 w-full max-w-md">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">{initialData ? 'Edit Patient' : 'Add New Patient'}</h3>
            <button onClick={onCancel} className="text-gray-500 hover:text-gray-700">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name *</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-3 py-2 border rounded-lg"
                placeholder="Patient name"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Age *</label>
                <input
                  type="number"
                  value={formData.age}
                  onChange={(e) => setFormData({...formData, age: e.target.value})}
                  className="w-full px-3 py-2 border rounded-lg"
                  placeholder="Age"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Status</label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({...formData, status: e.target.value})}
                  className="w-full px-3 py-2 border rounded-lg"
                >
                  <option value="Scheduled">Scheduled</option>
                  <option value="Under Treatment">Under Treatment</option>
                  <option value="Recovered">Recovered</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Condition *</label>
              <input
                type="text"
                value={formData.condition}
                onChange={(e) => setFormData({...formData, condition: e.target.value})}
                className="w-full px-3 py-2 border rounded-lg"
                placeholder="Medical condition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full px-3 py-2 border rounded-lg"
                placeholder="Phone number"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-3 py-2 border rounded-lg"
                placeholder="Email address"
              />
            </div>
          </div>
          
          <div className="flex space-x-3 mt-6">
            <button
              onClick={handleSubmit}
              className="flex-1 bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700"
            >
              <Save className="w-4 h-4 inline mr-2" />
              {initialData ? 'Update' : 'Add'} Patient
            </button>
            <button
              onClick={onCancel}
              className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Add Appointment Form Component
  const AddAppointmentForm = ({ onSubmit, onCancel, initialData = null }) => {
    const [formData, setFormData] = useState(initialData || {
      patient: '', doctor: 'Dr. Vamsi Krishna', time: '', date: '', type: 'Consultation'
    });

    const handleSubmit = () => {
      if (formData.patient && formData.time && formData.date) {
        onSubmit(formData);
      } else {
        alert('Please fill in all required fields');
      }
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-xl p-6 w-full max-w-md">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">{initialData ? 'Edit Appointment' : 'Schedule Appointment'}</h3>
            <button onClick={onCancel} className="text-gray-500 hover:text-gray-700">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Patient Name *</label>
              <input
                type="text"
                value={formData.patient}
                onChange={(e) => setFormData({...formData, patient: e.target.value})}
                className="w-full px-3 py-2 border rounded-lg"
                placeholder="Patient name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Doctor</label>
              <select
                value={formData.doctor}
                onChange={(e) => setFormData({...formData, doctor: e.target.value})}
                className="w-full px-3 py-2 border rounded-lg"
              >
                <option value="Dr. Vamsi Krishna">Dr. Vamsi Krishna</option>
                <option value="Dr. Priya Sharma">Dr. Priya Sharma</option>
                <option value="Dr. Rajesh Kumar">Dr. Rajesh Kumar</option>
                <option value="Dr. Anjali Patel">Dr. Anjali Patel</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Date *</label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Time *</label>
                <input
                  type="time"
                  value={formData.time}
                  onChange={(e) => setFormData({...formData, time: e.target.value})}
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Type</label>
              <select
                value={formData.type}
                onChange={(e) => setFormData({...formData, type: e.target.value})}
                className="w-full px-3 py-2 border rounded-lg"
              >
                <option value="Consultation">Consultation</option>
                <option value="Follow-up">Follow-up</option>
                <option value="Surgery">Surgery</option>
                <option value="Emergency">Emergency</option>
              </select>
            </div>
          </div>
          
          <div className="flex space-x-3 mt-6">
            <button
              onClick={handleSubmit}
              className="flex-1 bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700"
            >
              <Save className="w-4 h-4 inline mr-2" />
              {initialData ? 'Update' : 'Schedule'} Appointment
            </button>
            <button
              onClick={onCancel}
              className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">V</span>
                </div>
                <div>
                  <h1 className="text-lg font-bold text-gray-900">VAMSI ENT</h1>
                  <p className="text-xs text-primary-600 font-medium">ADMIN PANEL</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-600">
                Welcome, <span className="font-medium text-gray-900">Admin</span>
              </div>
              <button
                onClick={onLogout}
                className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <nav className="bg-white rounded-xl shadow-sm p-4 space-y-2">
              <button
                onClick={() => setActiveTab('overview')}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === 'overview' 
                    ? 'bg-primary-100 text-primary-700' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Activity className="w-5 h-5" />
                <span>Overview</span>
              </button>
              
              <button
                onClick={() => setActiveTab('patients')}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === 'patients' 
                    ? 'bg-primary-100 text-primary-700' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Users className="w-5 h-5" />
                <span>Patients</span>
              </button>
              
              <button
                onClick={() => setActiveTab('appointments')}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === 'appointments' 
                    ? 'bg-primary-100 text-primary-700' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Calendar className="w-5 h-5" />
                <span>Appointments</span>
              </button>
              
              <button
                onClick={() => setActiveTab('records')}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === 'records' 
                    ? 'bg-primary-100 text-primary-700' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <FileText className="w-5 h-5" />
                <span>Medical Records</span>
              </button>
              
              <button
                onClick={() => setActiveTab('inventory')}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === 'inventory' 
                    ? 'bg-primary-100 text-primary-700' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <TrendingUp className="w-5 h-5" />
                <span>Inventory</span>
              </button>
              
              <button
                onClick={() => setActiveTab('surgeries')}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === 'surgeries' 
                    ? 'bg-primary-100 text-primary-700' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <CheckCircle className="w-5 h-5" />
                <span>Surgeries</span>
              </button>
              
              <button
                onClick={() => setActiveTab('settings')}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === 'settings' 
                    ? 'bg-primary-100 text-primary-700' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Settings className="w-5 h-5" />
                <span>Settings</span>
              </button>
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'overview' && (
              <div className="space-y-8">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-sm p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                          <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                        </div>
                        <div className={`w-12 h-12 bg-${stat.color}-100 rounded-lg flex items-center justify-center`}>
                          <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
                        </div>
                      </div>
                      <div className="flex items-center mt-4">
                        <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                        <span className="text-sm text-green-600">{stat.change}</span>
                        <span className="text-sm text-gray-500 ml-1">from last month</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Recent Patients & Appointments */}
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Recent Patients */}
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-semibold text-gray-900">Recent Patients</h3>
                      <button 
                        onClick={() => setShowAddPatient(true)}
                        className="flex items-center space-x-2 text-sm text-primary-600 hover:text-primary-700"
                      >
                        <Plus className="w-4 h-4" />
                        <span>Add Patient</span>
                      </button>
                    </div>
                    
                    <div className="space-y-4">
                      {patients.slice(0, 5).map((patient) => (
                        <div key={patient.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div>
                            <h4 className="font-medium text-gray-900">{patient.name}</h4>
                            <p className="text-sm text-gray-600">{patient.condition}</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(patient.status)}`}>
                              {patient.status}
                            </span>
                            <button 
                              onClick={() => setEditingPatient(patient)}
                              className="text-gray-400 hover:text-gray-600"
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Upcoming Appointments */}
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-semibold text-gray-900">Today's Appointments</h3>
                      <button 
                        onClick={() => setShowAddAppointment(true)}
                        className="flex items-center space-x-2 text-sm text-primary-600 hover:text-primary-700"
                      >
                        <Plus className="w-4 h-4" />
                        <span>Schedule</span>
                      </button>
                    </div>
                    
                    <div className="space-y-4">
                      {appointments.filter(a => a.date === '2024-01-20').map((appointment) => (
                        <div key={appointment.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div>
                            <h4 className="font-medium text-gray-900">{appointment.patient}</h4>
                            <p className="text-sm text-gray-600">{appointment.doctor}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-medium text-gray-900">{appointment.time}</p>
                            <p className="text-xs text-gray-600">{appointment.type}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'patients' && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Patient Management</h3>
                  <button 
                    onClick={() => setShowAddPatient(true)}
                    className="btn-primary flex items-center space-x-2"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add New Patient</span>
                  </button>
                </div>

                {/* Search and Filter */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search patients..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                    <Filter className="w-4 h-4" />
                    <span>Filter</span>
                  </button>
                </div>

                {/* Patients Table */}
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Patient</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Age</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Condition</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredPatients.map((patient) => (
                        <tr key={patient.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-4">
                            <div>
                              <p className="font-medium text-gray-900">{patient.name}</p>
                              <p className="text-sm text-gray-600">ID: {patient.id}</p>
                            </div>
                          </td>
                          <td className="py-3 px-4 text-gray-600">{patient.age} years</td>
                          <td className="py-3 px-4 text-gray-600">{patient.condition}</td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(patient.status)}`}>
                              {patient.status}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex items-center space-x-2">
                              <button 
                                onClick={() => setEditingPatient(patient)}
                                className="text-blue-600 hover:text-blue-700"
                              >
                                <Eye className="w-4 h-4" />
                              </button>
                              <button 
                                onClick={() => setEditingPatient(patient)}
                                className="text-green-600 hover:text-green-700"
                              >
                                <Edit className="w-4 h-4" />
                              </button>
                              <button 
                                onClick={() => deletePatient(patient.id)}
                                className="text-red-600 hover:text-red-700"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'appointments' && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Appointment Management</h3>
                  <button 
                    onClick={() => setShowAddAppointment(true)}
                    className="btn-primary flex items-center space-x-2"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Schedule Appointment</span>
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Patient</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Doctor</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Date & Time</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Type</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {appointments.map((appointment) => (
                        <tr key={appointment.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-4 font-medium text-gray-900">{appointment.patient}</td>
                          <td className="py-3 px-4 text-gray-600">{appointment.doctor}</td>
                          <td className="py-3 px-4 text-gray-600">
                            <div>
                              <p className="font-medium">{appointment.date}</p>
                              <p className="text-sm">{appointment.time}</p>
                            </div>
                          </td>
                          <td className="py-3 px-4 text-gray-600">{appointment.type}</td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(appointment.status)}`}>
                              {appointment.status}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex items-center space-x-2">
                              <button 
                                onClick={() => setEditingAppointment(appointment)}
                                className="text-blue-600 hover:text-blue-700"
                              >
                                <Edit className="w-4 h-4" />
                              </button>
                              <button 
                                onClick={() => deleteAppointment(appointment.id)}
                                className="text-red-600 hover:text-red-700"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'records' && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Medical Records</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Patient</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Diagnosis</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Treatment</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Date</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Doctor</th>
                      </tr>
                    </thead>
                    <tbody>
                      {medicalRecords.map((record) => (
                        <tr key={record.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-4 font-medium text-gray-900">{record.patientName}</td>
                          <td className="py-3 px-4 text-gray-600">{record.diagnosis}</td>
                          <td className="py-3 px-4 text-gray-600">{record.treatment}</td>
                          <td className="py-3 px-4 text-gray-600">{record.date}</td>
                          <td className="py-3 px-4 text-gray-600">{record.doctor}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'inventory' && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Drug Inventory</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Drug Name</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Quantity</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Unit</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Last Updated</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Expiry Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {drugInventory.map((drug) => (
                        <tr key={drug.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-4 font-medium text-gray-900">{drug.name}</td>
                          <td className="py-3 px-4 text-gray-600">{drug.quantity}</td>
                          <td className="py-3 px-4 text-gray-600">{drug.unit}</td>
                          <td className="py-3 px-4 text-gray-600">{drug.lastUpdated}</td>
                          <td className="py-3 px-4 text-gray-600">{drug.expiryDate}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'surgeries' && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Surgery Records</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Surgery ID</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Date</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Type</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Patient</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Doctor</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Outcome</th>
                      </tr>
                    </thead>
                    <tbody>
                      {surgeryRecords.map((surgery) => (
                        <tr key={surgery.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-4 font-medium text-gray-900">{surgery.id}</td>
                          <td className="py-3 px-4 text-gray-600">{surgery.date}</td>
                          <td className="py-3 px-4 text-gray-600">{surgery.type}</td>
                          <td className="py-3 px-4 text-gray-600">{surgery.patient}</td>
                          <td className="py-3 px-4 text-gray-600">{surgery.doctor}</td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-1 text-xs rounded-full ${surgery.outcome === 'Successful' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                              {surgery.outcome}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">System Settings</h3>
                <div className="space-y-6">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-medium text-blue-900 mb-2">Hospital Information</h4>
                    <p className="text-blue-700 text-sm">Configure hospital details, contact information, and working hours.</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-medium text-green-900 mb-2">User Management</h4>
                    <p className="text-green-700 text-sm">Manage admin users, roles, and permissions.</p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-medium text-purple-900 mb-2">Backup & Security</h4>
                    <p className="text-purple-700 text-sm">Configure data backup, security settings, and system preferences.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modals */}
      {showAddPatient && (
        <AddPatientForm 
          onSubmit={addPatient}
          onCancel={() => setShowAddPatient(false)}
        />
      )}

      {editingPatient && (
        <AddPatientForm 
          onSubmit={updatePatient}
          onCancel={() => setEditingPatient(null)}
          initialData={editingPatient}
        />
      )}

      {showAddAppointment && (
        <AddAppointmentForm 
          onSubmit={addAppointment}
          onCancel={() => setShowAddAppointment(false)}
        />
      )}

      {editingAppointment && (
        <AddAppointmentForm 
          onSubmit={updateAppointment}
          onCancel={() => setEditingAppointment(null)}
          initialData={editingAppointment}
        />
      )}
    </div>
  );
};

export default AdminDashboard; 
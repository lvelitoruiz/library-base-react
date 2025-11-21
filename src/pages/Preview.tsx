import React, { useState } from 'react';
import {
  // Atoms
  Button,
  Input,
  Textarea,
  Select,
  Checkbox,
  Radio,
  Switch,
  Slider,
  Badge,
  Tag,
  Progress,
  Avatar,
  Icon,
  Skeleton,
  Spinner,
  Divider,
  Chip,
  KBD,
  // Molecules
  FormField,
  Card,
  Dropdown,
  InputGroup,
  ListItem,
  Alert,
  Breadcrumbs,
  Tabs,
  Accordion,
  SearchBar,
  StatCard,
  EmptyState,
  SimpleTable,
  Offcanvas,
  // Organisms
  Navbar,
  Sidebar,
  Header,
  Footer,
  Toolbar,
  ListGroup,
} from '@/components';

const Preview = () => {
  const [progress, setProgress] = useState(65);
  const [sliderValue, setSliderValue] = useState(50);
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState('1');
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(true);
  const [checkbox3, setCheckbox3] = useState(false);
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(true);
  const [switch3, setSwitch3] = useState(false);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <div className="sticky top-0 z-50 bg-card border-b border-border px-6 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold text-foreground">Component Library Preview</h1>
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 px-3 py-2 rounded-md bg-muted hover:bg-muted/80 text-foreground transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="5"/>
                    <line x1="12" y1="1" x2="12" y2="3"/>
                    <line x1="12" y1="21" x2="12" y2="23"/>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                    <line x1="1" y1="12" x2="3" y2="12"/>
                    <line x1="21" y1="12" x2="23" y2="12"/>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                  </svg>
                  <span className="text-sm font-medium">Light</span>
                </>
              ) : (
                <>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                  </svg>
                  <span className="text-sm font-medium">Dark</span>
                </>
              )}
            </button>
            <a href="/" className="text-primary hover:underline">
              Back to Home
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6 space-y-12">
        
        {/* ATOMS SECTION */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-foreground">Atoms</h2>
          
          {/* Button */}
          <div className="mb-8 p-6 bg-card rounded-lg border border-border shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Button</h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="sm">Primary Small</Button>
              <Button variant="primary" size="md">Primary Medium</Button>
              <Button variant="primary" size="lg">Primary Large</Button>
              <Button variant="secondary" size="md">Secondary</Button>
              <Button variant="ghost" size="md">Ghost</Button>
              <Button variant="primary" size="md" loading>Loading</Button>
              <Button variant="primary" size="md" disabled>Disabled</Button>
            </div>
          </div>

          {/* Input */}
          <div className="mb-8 p-6 bg-card rounded-lg border border-border shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Input</h3>
            <div className="space-y-4 max-w-md">
              <Input placeholder="Normal input" />
              <Input placeholder="Disabled input" disabled />
              <Input placeholder="Error input" error="This field is required" />
            </div>
          </div>

          {/* Textarea */}
          <div className="mb-8 p-6 bg-card rounded-lg border border-border shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Textarea</h3>
            <div className="space-y-4 max-w-md">
              <Textarea placeholder="Enter your message..." />
              <Textarea placeholder="Disabled textarea" disabled />
            </div>
          </div>

          {/* Select */}
          <div className="mb-8 p-6 bg-card rounded-lg border border-border shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Select</h3>
            <div className="space-y-4 max-w-md">
              <Select
                options={[
                  { label: 'Option 1', value: '1' },
                  { label: 'Option 2', value: '2' },
                  { label: 'Option 3', value: '3' },
                ]}
              />
            </div>
          </div>

          {/* Checkbox */}
          <div className="mb-8 p-6 bg-card rounded-lg border border-border shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Checkbox</h3>
            <div className="space-y-2">
              <Checkbox 
                checked={checkbox1} 
                onChange={setCheckbox1}
                label="Accept terms and conditions" 
              />
              <Checkbox 
                checked={checkbox2} 
                onChange={setCheckbox2}
                label="Subscribe to newsletter" 
              />
              <Checkbox 
                checked={checkbox3} 
                onChange={setCheckbox3}
                label="Disabled checkbox" 
                disabled 
              />
            </div>
          </div>

          {/* Radio */}
          <div className="mb-8 p-6 bg-card rounded-lg border border-border shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Radio</h3>
            <div className="space-y-2">
              <Radio 
                name="option" 
                label="Option 1" 
                value="1" 
                checked={selectedRadio === '1'}
                onChange={() => setSelectedRadio('1')}
              />
              <Radio 
                name="option" 
                label="Option 2" 
                value="2" 
                checked={selectedRadio === '2'}
                onChange={() => setSelectedRadio('2')}
              />
              <Radio 
                name="option" 
                label="Option 3" 
                value="3" 
                checked={selectedRadio === '3'}
                onChange={() => setSelectedRadio('3')}
              />
            </div>
          </div>

          {/* Switch */}
          <div className="mb-8 p-6 bg-card rounded-lg border border-border shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Switch</h3>
            <div className="space-y-2">
              <Switch 
                checked={switch1}
                onChange={setSwitch1}
                label="Enable notifications" 
              />
              <Switch 
                checked={switch2}
                onChange={setSwitch2}
                label="Dark mode" 
              />
              <Switch 
                checked={switch3}
                onChange={setSwitch3}
                label="Disabled" 
                disabled 
              />
            </div>
          </div>

          {/* Slider */}
          <div className="mb-8 p-6 bg-card rounded-lg border border-border shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Slider</h3>
            <div className="max-w-md space-y-4">
              <div>
                <p className="text-sm mb-2 text-foreground">Volume: {sliderValue}%</p>
                <Slider
                  value={sliderValue}
                  onChange={setSliderValue}
                />
              </div>
            </div>
          </div>

          {/* Badge */}
          <div className="mb-8 p-6 bg-card rounded-lg border border-border shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Badge</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm mb-2 text-muted-foreground">Variants</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="primary">Primary</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="success">Success</Badge>
                  <Badge variant="warning">Warning</Badge>
                  <Badge variant="danger">Danger</Badge>
                </div>
              </div>
              <div>
                <p className="text-sm mb-2 text-muted-foreground">Sizes</p>
                <div className="flex flex-wrap gap-2 items-center">
                  <Badge size="sm">Small</Badge>
                  <Badge size="md">Medium</Badge>
                  <Badge size="lg">Large</Badge>
                </div>
              </div>
              <div>
                <p className="text-sm mb-2 text-muted-foreground">Rounded</p>
                <div className="flex flex-wrap gap-2">
                  <Badge rounded>Rounded Badge</Badge>
                  <Badge variant="success" rounded>Success</Badge>
                  <Badge variant="danger" size="sm" rounded>Danger</Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Tag */}
          <div className="mb-8 p-6 bg-card rounded-lg border border-border shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Tag</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm mb-2 text-muted-foreground">Variants</p>
                <div className="flex flex-wrap gap-2">
                  <Tag variant="primary">Primary</Tag>
                  <Tag variant="secondary">Secondary</Tag>
                  <Tag variant="success">Success</Tag>
                  <Tag variant="warning">Warning</Tag>
                  <Tag variant="danger">Danger</Tag>
                </div>
              </div>
              <div>
                <p className="text-sm mb-2 text-muted-foreground">Sizes</p>
                <div className="flex flex-wrap gap-2 items-center">
                  <Tag size="sm">Small</Tag>
                  <Tag size="md">Medium</Tag>
                  <Tag size="lg">Large</Tag>
                </div>
              </div>
              <div>
                <p className="text-sm mb-2 text-muted-foreground">Removable</p>
                <div className="flex flex-wrap gap-2">
                  <Tag variant="primary" removable onRemove={() => console.log('Remove primary')}>React</Tag>
                  <Tag variant="success" removable onRemove={() => console.log('Remove success')}>TypeScript</Tag>
                  <Tag variant="danger" size="sm" removable onRemove={() => console.log('Remove danger')}>Remove me</Tag>
                </div>
              </div>
              <div>
                <p className="text-sm mb-2 text-muted-foreground">Not Rounded</p>
                <div className="flex flex-wrap gap-2">
                  <Tag rounded={false}>Square Tag</Tag>
                  <Tag variant="success" rounded={false}>Success</Tag>
                </div>
              </div>
            </div>
          </div>

          {/* Progress */}
          <div className="mb-8 p-6 bg-card rounded-lg border border-border shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Progress</h3>
            <div className="max-w-md space-y-4">
              <div>
                <p className="text-sm mb-2 text-foreground">Progress: {progress}%</p>
                <Progress value={progress} />
              </div>
              <Button size="sm" onClick={() => setProgress(Math.min(100, progress + 10))}>
                Increase +10%
              </Button>
            </div>
          </div>

          {/* Avatar */}
          <div className="mb-8 p-6 bg-card rounded-lg border border-border shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Avatar</h3>
            <div className="flex items-center gap-4">
              <Avatar size="sm" alt="John Doe" />
              <Avatar size="md" alt="Jane Smith" />
              <Avatar size="lg" alt="Robert Johnson" />
              <Avatar size="md" src="https://i.pravatar.cc/150?img=1" alt="User" />
            </div>
          </div>

          {/* Icon */}
          <div className="mb-8 p-6 bg-card rounded-lg border border-border shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Icon</h3>
            <div className="flex items-center gap-4">
              <Icon size={24}>
                <path stroke="currentColor" strokeWidth="2" d="M12 2L2 7l10 5 10-5-10-5z" />
                <path stroke="currentColor" strokeWidth="2" d="M2 17l10 5 10-5M2 12l10 5 10-5" />
              </Icon>
              <Icon size={32}>
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
              </Icon>
            </div>
          </div>

          {/* Skeleton */}
          <div className="mb-8 p-6 bg-card rounded-lg border border-border shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Skeleton</h3>
            <div className="space-y-4 max-w-md">
              <Skeleton width="100%" height="20px" />
              <Skeleton width="80%" height="20px" />
              <Skeleton width="60%" height="20px" />
              <Skeleton variant="circular" width="60px" height="60px" />
            </div>
          </div>

          {/* Spinner */}
          <div className="mb-8 p-6 bg-card rounded-lg border border-border shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Spinner</h3>
            <div className="flex items-center gap-4">
              <Spinner size="sm" />
              <Spinner size="md" />
              <Spinner size="lg" />
            </div>
          </div>

          {/* Divider */}
          <div className="mb-8 p-6 bg-card rounded-lg border border-border shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Divider</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Horizontal</p>
                <Divider />
              </div>
              <div className="flex items-center gap-4 h-20">
                <p className="text-sm text-muted-foreground">Vertical</p>
                <Divider orientation="vertical" />
                <p className="text-sm text-muted-foreground">Example</p>
              </div>
            </div>
          </div>

          {/* Chip */}
          <div className="mb-8 p-6 bg-card rounded-lg border border-border shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Chip</h3>
            <div className="flex flex-wrap gap-2">
              <Chip label="Default" />
              <Chip label="Primary" variant="primary" />
              <Chip label="Success" variant="success" />
              <Chip label="Error" variant="error" />
              <Chip label="Removable" onRemove={() => alert('Chip removed')} />
            </div>
          </div>

          {/* KBD */}
          <div className="mb-8 p-6 bg-card rounded-lg border border-border shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-foreground">KBD</h3>
            <div className="flex items-center gap-2 flex-wrap">
              <p className="text-foreground">Press</p>
              <KBD>Ctrl</KBD>
              <p>+</p>
              <KBD>K</KBD>
              <p>to search</p>
            </div>
          </div>
        </section>

        {/* MOLECULES SECTION */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-foreground">Molecules</h2>

          {/* FormField */}
          <div className="mb-8 p-6 bg-card rounded-lg border border-border shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-foreground">FormField</h3>
            <div className="max-w-md space-y-4">
              <FormField
                id="email"
                label="Email"
                placeholder="Enter your email"
                required
              />
              <FormField
                id="password"
                label="Password"
                type="password"
                helperText="Must be at least 8 characters"
              />
              <FormField
                id="username"
                label="Username"
                error="Username is already taken"
              />
            </div>
          </div>

          {/* Card */}
          <div className="mb-8 p-6 bg-card rounded-lg border border-border shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Card</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <h4 className="font-semibold mb-2 text-foreground">Card Title</h4>
                <p className="text-sm text-muted-foreground">
                  This is a card component with some content inside.
                </p>
              </Card>
              <Card>
                <h4 className="font-semibold mb-2 text-foreground">Another Card</h4>
                <p className="text-sm text-muted-foreground">
                  Cards can contain any content you want.
                </p>
              </Card>
            </div>
          </div>

          {/* Dropdown */}
          <div className="mb-8 p-6 bg-card rounded-lg border border-border shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Dropdown</h3>
            <Dropdown trigger={<Button variant="secondary">Open Menu</Button>}>
              <div className="py-1">
                <button className="block w-full text-left px-4 py-2 hover:bg-muted text-foreground">
                  Profile
                </button>
                <button className="block w-full text-left px-4 py-2 hover:bg-muted text-foreground">
                  Settings
                </button>
                <button className="block w-full text-left px-4 py-2 hover:bg-muted text-foreground">
                  Logout
                </button>
              </div>
            </Dropdown>
          </div>

          {/* InputGroup */}
          <div className="mb-8 p-6 bg-card rounded-lg border border-border shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-foreground">InputGroup</h3>
            <div className="max-w-md space-y-4">
              <InputGroup prefix={<span>$</span>}>
                <Input placeholder="0.00" />
              </InputGroup>
              <InputGroup suffix={<Button size="sm">Send</Button>}>
                <Input placeholder="Enter message..." />
              </InputGroup>
            </div>
          </div>

          {/* Alert */}
          <div className="mb-8 p-6 bg-card rounded-lg border border-border shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Alert</h3>
            <div className="space-y-4">
              <Alert variant="info">This is an informational alert message.</Alert>
              <Alert variant="success">Operation completed successfully!</Alert>
              <Alert variant="warning">Please review your information.</Alert>
              <Alert variant="error">An error occurred. Please try again.</Alert>
            </div>
          </div>

          {/* Breadcrumbs */}
          <div className="mb-8 p-6 bg-card rounded-lg border border-border shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Breadcrumbs</h3>
            <Breadcrumbs
              items={[
                { label: 'Home', href: '/' },
                { label: 'Products', href: '/products' },
                { label: 'Category', href: '/products/category' },
                { label: 'Item' },
              ]}
            />
          </div>

          {/* Tabs */}
          <div className="mb-8 p-6 bg-card rounded-lg border border-border shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Tabs</h3>
            <Tabs
              items={[
                { label: 'Overview', content: <p className="text-foreground">Overview content goes here.</p> },
                { label: 'Details', content: <p className="text-foreground">Details content goes here.</p> },
                { label: 'Settings', content: <p className="text-foreground">Settings content goes here.</p> },
              ]}
            />
          </div>

          {/* Accordion */}
          <div className="mb-8 p-6 bg-card rounded-lg border border-border shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Accordion</h3>
            <Accordion
              items={[
                {
                  title: 'What is this component library?',
                  content: 'This is a React component library built with TypeScript and Tailwind CSS.',
                },
                {
                  title: 'How do I use these components?',
                  content: 'Import the components from the library and use them in your React application.',
                },
                {
                  title: 'Can I customize the styles?',
                  content: 'Yes, all components support custom styling through className props.',
                },
              ]}
            />
          </div>

          {/* SearchBar */}
          <div className="mb-8 p-6 bg-card rounded-lg border border-border shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-foreground">SearchBar</h3>
            <div className="max-w-md">
              <SearchBar
                placeholder="Search components..."
                onSearch={(value) => console.log('Search:', value)}
              />
            </div>
          </div>

          {/* StatCard */}
          <div className="mb-8 p-6 bg-card rounded-lg border border-border shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-foreground">StatCard</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <StatCard
                title="Total Users"
                value="1,234"
                description="Active users this month"
                trend={{ direction: 'up', value: '+12.5%' }}
              />
              <StatCard
                title="Revenue"
                value="$12,345"
                description="Total revenue"
                trend={{ direction: 'up', value: '+8.2%' }}
              />
              <StatCard
                title="Orders"
                value="456"
                description="Orders this week"
                trend={{ direction: 'down', value: '-3.1%' }}
              />
            </div>
          </div>

          {/* EmptyState */}
          <div className="mb-8 p-6 bg-card rounded-lg border border-border shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-foreground">EmptyState</h3>
            <EmptyState
              icon={
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                  <path d="M12 8v4M12 16h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              }
              title="No data found"
              description="There are no items to display at the moment. Try adding some content."
              action={<Button size="sm">Add Item</Button>}
            />
          </div>

          {/* SimpleTable */}
          <div className="mb-8 p-6 bg-card rounded-lg border border-border shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-foreground">SimpleTable</h3>
            <SimpleTable
              headers={['Name', 'Email', 'Role', 'Status']}
              rows={[
                ['John Doe', 'john@example.com', 'Admin', 'Active'],
                ['Jane Smith', 'jane@example.com', 'User', 'Active'],
                ['Bob Johnson', 'bob@example.com', 'User', 'Inactive'],
              ]}
            />
          </div>

          {/* Offcanvas */}
          <div className="mb-8 p-6 bg-card rounded-lg border border-border shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Offcanvas</h3>
            <Button onClick={() => setOffcanvasOpen(true)}>Open Offcanvas</Button>
            <Offcanvas
              isOpen={offcanvasOpen}
              onClose={() => setOffcanvasOpen(false)}
              title="Offcanvas Title"
              position="right"
            >
              <p className="text-foreground">This is the offcanvas content.</p>
            </Offcanvas>
          </div>
        </section>

        {/* ORGANISMS SECTION */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-foreground">Organisms</h2>

          {/* Navbar */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Navbar</h3>
            <Navbar
              logo={<span className="font-bold text-primary">Logo</span>}
            >
              <a href="#" className="text-foreground hover:text-primary">
                Home
              </a>
              <a href="#" className="text-foreground hover:text-primary">
                Products
              </a>
              <a href="#" className="text-foreground hover:text-primary">
                About
              </a>
            </Navbar>
          </div>

          {/* Header */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Header</h3>
            <Header>
              <div className="flex items-center justify-between w-full">
                <h2 className="text-xl font-bold text-foreground">Page Header</h2>
                <Button size="sm">Action</Button>
              </div>
            </Header>
          </div>

          {/* Sidebar */}
          <div className="mb-8 p-6 bg-card rounded-lg border border-border shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Sidebar</h3>
            <div className="flex gap-4 h-64">
              <Sidebar isOpen={true}>
                <nav className="space-y-2">
                  <a href="#" className="block px-3 py-2 rounded hover:bg-muted text-foreground">
                    Dashboard
                  </a>
                  <a href="#" className="block px-3 py-2 rounded hover:bg-muted text-foreground">
                    Projects
                  </a>
                  <a href="#" className="block px-3 py-2 rounded hover:bg-muted text-foreground">
                    Team
                  </a>
                </nav>
              </Sidebar>
              <div className="flex-1 p-4 bg-muted rounded">
                <p className="text-foreground">Main content area</p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Footer</h3>
            <Footer>
              <div className="flex justify-between items-center w-full">
                <p className="text-sm text-muted-foreground">
                  © 2024 Component Library. All rights reserved.
                </p>
                <div className="flex gap-4">
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Privacy
                  </a>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Terms
                  </a>
                </div>
              </div>
            </Footer>
          </div>

          {/* Toolbar */}
          <div className="mb-8 p-6 bg-card rounded-lg border border-border shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Toolbar</h3>
            <Toolbar>
              <Button size="sm" variant="ghost">Bold</Button>
              <Button size="sm" variant="ghost">Italic</Button>
              <Button size="sm" variant="ghost">Underline</Button>
              <div className="border-l border-border h-6 mx-1" />
              <Button size="sm" variant="ghost">Link</Button>
            </Toolbar>
          </div>

          {/* ListGroup with ListItem */}
          <div className="mb-8 p-6 bg-card rounded-lg border border-border shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-foreground">ListGroup & ListItem</h3>
            <ListGroup>
              <ListItem>First item in the list</ListItem>
              <ListItem>Second item in the list</ListItem>
              <ListItem>Third item in the list</ListItem>
              <ListItem>Fourth item in the list</ListItem>
            </ListGroup>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Preview;

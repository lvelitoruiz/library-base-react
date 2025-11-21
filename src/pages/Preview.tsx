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

  return (
    <div className="min-h-screen bg-[var(--color-neutral-50)]">
      {/* Navigation */}
      <div className="sticky top-0 z-50 bg-white border-b border-[var(--color-neutral-300)] px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold text-[var(--color-neutral-900)]">Component Library Preview</h1>
          <a href="/" className="text-[var(--color-primary-500)] hover:underline">
            Back to Home
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6 space-y-12">
        
        {/* ATOMS SECTION */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-[var(--color-neutral-900)]">Atoms</h2>
          
          {/* Button */}
          <div className="mb-8 p-6 bg-white rounded-[var(--radius-lg)] border border-[var(--color-neutral-300)]">
            <h3 className="text-xl font-semibold mb-4 text-[var(--color-neutral-800)]">Button</h3>
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
          <div className="mb-8 p-6 bg-white rounded-[var(--radius-lg)] border border-[var(--color-neutral-300)]">
            <h3 className="text-xl font-semibold mb-4 text-[var(--color-neutral-800)]">Input</h3>
            <div className="space-y-4 max-w-md">
              <Input placeholder="Normal input" />
              <Input placeholder="Disabled input" disabled />
              <Input placeholder="Error input" error="This field is required" />
            </div>
          </div>

          {/* Textarea */}
          <div className="mb-8 p-6 bg-white rounded-[var(--radius-lg)] border border-[var(--color-neutral-300)]">
            <h3 className="text-xl font-semibold mb-4 text-[var(--color-neutral-800)]">Textarea</h3>
            <div className="space-y-4 max-w-md">
              <Textarea placeholder="Enter your message..." />
              <Textarea placeholder="Disabled textarea" disabled />
            </div>
          </div>

          {/* Select */}
          <div className="mb-8 p-6 bg-white rounded-[var(--radius-lg)] border border-[var(--color-neutral-300)]">
            <h3 className="text-xl font-semibold mb-4 text-[var(--color-neutral-800)]">Select</h3>
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
          <div className="mb-8 p-6 bg-white rounded-[var(--radius-lg)] border border-[var(--color-neutral-300)]">
            <h3 className="text-xl font-semibold mb-4 text-[var(--color-neutral-800)]">Checkbox</h3>
            <div className="space-y-2">
              <Checkbox label="Accept terms and conditions" />
              <Checkbox label="Subscribe to newsletter" defaultChecked />
              <Checkbox label="Disabled checkbox" disabled />
            </div>
          </div>

          {/* Radio */}
          <div className="mb-8 p-6 bg-white rounded-[var(--radius-lg)] border border-[var(--color-neutral-300)]">
            <h3 className="text-xl font-semibold mb-4 text-[var(--color-neutral-800)]">Radio</h3>
            <div className="space-y-2">
              <Radio name="option" label="Option 1" value="1" defaultChecked />
              <Radio name="option" label="Option 2" value="2" />
              <Radio name="option" label="Option 3" value="3" />
            </div>
          </div>

          {/* Switch */}
          <div className="mb-8 p-6 bg-white rounded-[var(--radius-lg)] border border-[var(--color-neutral-300)]">
            <h3 className="text-xl font-semibold mb-4 text-[var(--color-neutral-800)]">Switch</h3>
            <div className="space-y-2">
              <Switch label="Enable notifications" />
              <Switch label="Dark mode" defaultChecked />
              <Switch label="Disabled" disabled />
            </div>
          </div>

          {/* Slider */}
          <div className="mb-8 p-6 bg-white rounded-[var(--radius-lg)] border border-[var(--color-neutral-300)]">
            <h3 className="text-xl font-semibold mb-4 text-[var(--color-neutral-800)]">Slider</h3>
            <div className="max-w-md space-y-4">
              <Slider
                label={`Volume: ${sliderValue}%`}
                value={sliderValue}
                onChange={(e) => setSliderValue(Number(e.target.value))}
              />
            </div>
          </div>

          {/* Badge */}
          <div className="mb-8 p-6 bg-white rounded-[var(--radius-lg)] border border-[var(--color-neutral-300)]">
            <h3 className="text-xl font-semibold mb-4 text-[var(--color-neutral-800)]">Badge</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="primary">Primary</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="error">Error</Badge>
            </div>
          </div>

          {/* Tag */}
          <div className="mb-8 p-6 bg-white rounded-[var(--radius-lg)] border border-[var(--color-neutral-300)]">
            <h3 className="text-xl font-semibold mb-4 text-[var(--color-neutral-800)]">Tag</h3>
            <div className="flex flex-wrap gap-2">
              <Tag>React</Tag>
              <Tag>TypeScript</Tag>
              <Tag onRemove={() => alert('Tag removed')}>Removable</Tag>
            </div>
          </div>

          {/* Progress */}
          <div className="mb-8 p-6 bg-white rounded-[var(--radius-lg)] border border-[var(--color-neutral-300)]">
            <h3 className="text-xl font-semibold mb-4 text-[var(--color-neutral-800)]">Progress</h3>
            <div className="max-w-md space-y-4">
              <div>
                <p className="text-sm mb-2">Progress: {progress}%</p>
                <Progress value={progress} />
              </div>
              <Button size="sm" onClick={() => setProgress(Math.min(100, progress + 10))}>
                Increase +10%
              </Button>
            </div>
          </div>

          {/* Avatar */}
          <div className="mb-8 p-6 bg-white rounded-[var(--radius-lg)] border border-[var(--color-neutral-300)]">
            <h3 className="text-xl font-semibold mb-4 text-[var(--color-neutral-800)]">Avatar</h3>
            <div className="flex items-center gap-4">
              <Avatar size="sm" alt="John Doe" />
              <Avatar size="md" alt="Jane Smith" />
              <Avatar size="lg" alt="Robert Johnson" />
              <Avatar size="md" src="https://i.pravatar.cc/150?img=1" alt="User" />
            </div>
          </div>

          {/* Icon */}
          <div className="mb-8 p-6 bg-white rounded-[var(--radius-lg)] border border-[var(--color-neutral-300)]">
            <h3 className="text-xl font-semibold mb-4 text-[var(--color-neutral-800)]">Icon (Placeholder)</h3>
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
        </section>

        {/* MOLECULES SECTION */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-[var(--color-neutral-900)]">Molecules</h2>

          {/* FormField */}
          <div className="mb-8 p-6 bg-white rounded-[var(--radius-lg)] border border-[var(--color-neutral-300)]">
            <h3 className="text-xl font-semibold mb-4 text-[var(--color-neutral-800)]">FormField</h3>
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
          <div className="mb-8 p-6 bg-white rounded-[var(--radius-lg)] border border-[var(--color-neutral-300)]">
            <h3 className="text-xl font-semibold mb-4 text-[var(--color-neutral-800)]">Card</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <h4 className="font-semibold mb-2">Card Title</h4>
                <p className="text-sm text-[var(--color-neutral-600)]">
                  This is a card component with some content inside.
                </p>
              </Card>
              <Card>
                <h4 className="font-semibold mb-2">Another Card</h4>
                <p className="text-sm text-[var(--color-neutral-600)]">
                  Cards can contain any content you want.
                </p>
              </Card>
            </div>
          </div>

          {/* Dropdown */}
          <div className="mb-8 p-6 bg-white rounded-[var(--radius-lg)] border border-[var(--color-neutral-300)]">
            <h3 className="text-xl font-semibold mb-4 text-[var(--color-neutral-800)]">Dropdown</h3>
            <Dropdown trigger={<Button variant="secondary">Open Menu</Button>}>
              <div className="py-1">
                <button className="block w-full text-left px-4 py-2 hover:bg-[var(--color-neutral-100)]">
                  Profile
                </button>
                <button className="block w-full text-left px-4 py-2 hover:bg-[var(--color-neutral-100)]">
                  Settings
                </button>
                <button className="block w-full text-left px-4 py-2 hover:bg-[var(--color-neutral-100)]">
                  Logout
                </button>
              </div>
            </Dropdown>
          </div>

          {/* InputGroup */}
          <div className="mb-8 p-6 bg-white rounded-[var(--radius-lg)] border border-[var(--color-neutral-300)]">
            <h3 className="text-xl font-semibold mb-4 text-[var(--color-neutral-800)]">InputGroup</h3>
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
          <div className="mb-8 p-6 bg-white rounded-[var(--radius-lg)] border border-[var(--color-neutral-300)]">
            <h3 className="text-xl font-semibold mb-4 text-[var(--color-neutral-800)]">Alert</h3>
            <div className="space-y-4">
              <Alert variant="info">This is an informational alert message.</Alert>
              <Alert variant="success">Operation completed successfully!</Alert>
              <Alert variant="warning">Please review your information.</Alert>
              <Alert variant="error">An error occurred. Please try again.</Alert>
            </div>
          </div>

          {/* Breadcrumbs */}
          <div className="mb-8 p-6 bg-white rounded-[var(--radius-lg)] border border-[var(--color-neutral-300)]">
            <h3 className="text-xl font-semibold mb-4 text-[var(--color-neutral-800)]">Breadcrumbs</h3>
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
          <div className="mb-8 p-6 bg-white rounded-[var(--radius-lg)] border border-[var(--color-neutral-300)]">
            <h3 className="text-xl font-semibold mb-4 text-[var(--color-neutral-800)]">Tabs</h3>
            <Tabs
              items={[
                { label: 'Overview', content: <p>Overview content goes here.</p> },
                { label: 'Details', content: <p>Details content goes here.</p> },
                { label: 'Settings', content: <p>Settings content goes here.</p> },
              ]}
            />
          </div>

          {/* Accordion */}
          <div className="mb-8 p-6 bg-white rounded-[var(--radius-lg)] border border-[var(--color-neutral-300)]">
            <h3 className="text-xl font-semibold mb-4 text-[var(--color-neutral-800)]">Accordion</h3>
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
          <div className="mb-8 p-6 bg-white rounded-[var(--radius-lg)] border border-[var(--color-neutral-300)]">
            <h3 className="text-xl font-semibold mb-4 text-[var(--color-neutral-800)]">SearchBar</h3>
            <div className="max-w-md">
              <SearchBar
                placeholder="Search components..."
                onSearch={(value) => console.log('Search:', value)}
              />
            </div>
          </div>

          {/* ListItem (shown in ListGroup in organisms) */}
        </section>

        {/* ORGANISMS SECTION */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-[var(--color-neutral-900)]">Organisms</h2>

          {/* Navbar */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-[var(--color-neutral-800)]">Navbar</h3>
            <Navbar
              logo={<span className="font-bold text-[var(--color-primary-500)]">Logo</span>}
            >
              <a href="#" className="text-[var(--color-neutral-700)] hover:text-[var(--color-primary-500)]">
                Home
              </a>
              <a href="#" className="text-[var(--color-neutral-700)] hover:text-[var(--color-primary-500)]">
                Products
              </a>
              <a href="#" className="text-[var(--color-neutral-700)] hover:text-[var(--color-primary-500)]">
                About
              </a>
            </Navbar>
          </div>

          {/* Header */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-[var(--color-neutral-800)]">Header</h3>
            <Header>
              <div className="flex items-center justify-between w-full">
                <h2 className="text-xl font-bold">Page Header</h2>
                <Button size="sm">Action</Button>
              </div>
            </Header>
          </div>

          {/* Sidebar */}
          <div className="mb-8 p-6 bg-white rounded-[var(--radius-lg)] border border-[var(--color-neutral-300)]">
            <h3 className="text-xl font-semibold mb-4 text-[var(--color-neutral-800)]">Sidebar</h3>
            <div className="flex gap-4 h-64">
              <Sidebar isOpen={true}>
                <nav className="space-y-2">
                  <a href="#" className="block px-3 py-2 rounded hover:bg-[var(--color-neutral-100)]">
                    Dashboard
                  </a>
                  <a href="#" className="block px-3 py-2 rounded hover:bg-[var(--color-neutral-100)]">
                    Projects
                  </a>
                  <a href="#" className="block px-3 py-2 rounded hover:bg-[var(--color-neutral-100)]">
                    Team
                  </a>
                </nav>
              </Sidebar>
              <div className="flex-1 p-4 bg-[var(--color-neutral-100)] rounded">
                <p>Main content area</p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-[var(--color-neutral-800)]">Footer</h3>
            <Footer>
              <div className="flex justify-between items-center w-full">
                <p className="text-sm text-[var(--color-neutral-600)]">
                  © 2024 Component Library. All rights reserved.
                </p>
                <div className="flex gap-4">
                  <a href="#" className="text-sm text-[var(--color-neutral-600)] hover:text-[var(--color-primary-500)]">
                    Privacy
                  </a>
                  <a href="#" className="text-sm text-[var(--color-neutral-600)] hover:text-[var(--color-primary-500)]">
                    Terms
                  </a>
                </div>
              </div>
            </Footer>
          </div>

          {/* Toolbar */}
          <div className="mb-8 p-6 bg-white rounded-[var(--radius-lg)] border border-[var(--color-neutral-300)]">
            <h3 className="text-xl font-semibold mb-4 text-[var(--color-neutral-800)]">Toolbar</h3>
            <Toolbar>
              <Button size="sm" variant="ghost">Bold</Button>
              <Button size="sm" variant="ghost">Italic</Button>
              <Button size="sm" variant="ghost">Underline</Button>
              <div className="border-l border-[var(--color-neutral-300)] h-6 mx-1" />
              <Button size="sm" variant="ghost">Link</Button>
            </Toolbar>
          </div>

          {/* ListGroup with ListItem */}
          <div className="mb-8 p-6 bg-white rounded-[var(--radius-lg)] border border-[var(--color-neutral-300)]">
            <h3 className="text-xl font-semibold mb-4 text-[var(--color-neutral-800)]">ListGroup & ListItem</h3>
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

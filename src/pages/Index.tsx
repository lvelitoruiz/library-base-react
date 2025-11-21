import { useState } from 'react';
import { Button } from '@/components/atoms/Button';
import { Input } from '@/components/atoms/Input';
import { FormField } from '@/components/molecules/FormField';
import { Navbar } from '@/components/organisms/Navbar';

const Index = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Validate email
    if (!email.includes('@')) {
      setEmailError('Please enter a valid email address');
      setLoading(false);
      return;
    }
    
    setEmailError('');
    
    // Simulate async operation
    setTimeout(() => {
      setLoading(false);
      alert(`Form submitted!\nName: ${name}\nEmail: ${email}`);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[var(--color-neutral-50)]">
      <Navbar
        logo={
          <h1 className="text-xl font-bold text-[var(--color-primary-600)]">
            UI Library
          </h1>
        }
        links={[
          { label: 'Docs', href: '#docs' },
          { label: 'Components', href: '#components' },
        ]}
        rightContent={
          <Button variant="primary" size="sm">
            Get Started
          </Button>
        }
      />

      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-[var(--font-size-5xl)] font-bold text-[var(--color-neutral-900)] mb-4">
            React UI Component Library
          </h1>
          <p className="text-[var(--font-size-xl)] text-[var(--color-neutral-600)]">
            Professional components with atomic design, design tokens, and Tailwind CSS
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-[var(--radius-xl)] shadow-[var(--shadow-md)]">
            <h2 className="text-[var(--font-size-2xl)] font-semibold mb-4 text-[var(--color-neutral-900)]">
              Atomic Design
            </h2>
            <p className="text-[var(--color-neutral-600)] mb-4">
              Organized structure with atoms, molecules, and organisms for maximum reusability.
            </p>
            <div className="flex gap-2">
              <Button variant="primary" size="sm">Primary</Button>
              <Button variant="secondary" size="sm">Secondary</Button>
              <Button variant="ghost" size="sm">Ghost</Button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-[var(--radius-xl)] shadow-[var(--shadow-md)]">
            <h2 className="text-[var(--font-size-2xl)] font-semibold mb-4 text-[var(--color-neutral-900)]">
              Design Tokens
            </h2>
            <p className="text-[var(--color-neutral-600)] mb-4">
              Centralized design system with JSON tokens and CSS variables for consistency.
            </p>
            <div className="flex gap-2">
              <div className="w-8 h-8 rounded-full bg-[var(--color-primary-500)]" />
              <div className="w-8 h-8 rounded-full bg-[var(--color-success-500)]" />
              <div className="w-8 h-8 rounded-full bg-[var(--color-warning-500)]" />
              <div className="w-8 h-8 rounded-full bg-[var(--color-error-500)]" />
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-[var(--radius-xl)] shadow-[var(--shadow-lg)]">
          <h2 className="text-[var(--font-size-3xl)] font-semibold mb-6 text-[var(--color-neutral-900)]">
            Try the Components
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <FormField
              label="Full Name"
              id="name"
              required
              hint="Enter your full name"
            >
              <Input
                placeholder="John Doe"
                value={name}
                onChange={setName}
              />
            </FormField>
            <FormField
              label="Email Address"
              id="email"
              required
              error={emailError}
            >
              <Input
                type="email"
                placeholder="john@example.com"
                value={email}
                onChange={(value) => {
                  setEmail(value);
                  setEmailError('');
                }}
              />
            </FormField>
            <div className="flex gap-3 pt-4">
              <Button 
                type="submit" 
                variant="primary" 
                size="lg" 
                loading={loading}
                fullWidth
              >
                Submit Form
              </Button>
              <Button
                type="button"
                variant="secondary"
                size="lg"
                onClick={() => {
                  setName('');
                  setEmail('');
                  setEmailError('');
                }}
              >
                Reset
              </Button>
            </div>
          </form>
        </div>

        <div className="mt-12 text-center">
          <p className="text-[var(--color-neutral-600)] mb-4">
            Component sizes and variants:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button variant="primary" size="sm">Small</Button>
            <Button variant="primary" size="md">Medium</Button>
            <Button variant="primary" size="lg">Large</Button>
            <Button variant="secondary" size="md" disabled>Disabled</Button>
            <Button variant="primary" size="md" loading>Loading</Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;

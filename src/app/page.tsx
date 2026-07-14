import { Button } from "@/components/ui/Button";
import { Heading, Text } from "@/components/ui/Typography";

import { Mail, Search } from "lucide-react";
import { Input } from "@/components/ui/Input";

import { Textarea } from "@/components/ui/Textarea";

import { Select } from "@/components/ui/Select";

import { Checkbox } from "@/components/ui/Checkbox";

import { Radio } from "@/components/ui/Radio";

import { Switch } from "@/components/ui/Switch";

import { FeaturesSection } from "@/components/sections/FeaturesSection";

export default function HomePage() {
  return (
    <main className="container mx-auto space-y-10 py-16">
      {/* ==========================
          Heading Component Demo
      ========================== */}

      <section className="space-y-4">
        <Heading level={1} align="center">
          Welcome to LNCT University
        </Heading>

        <Heading level={2}>Admissions Open 2026</Heading>

        <Heading level={3} color="primary">
          Excellence in Education
        </Heading>

        <Heading level={4} align="center" color="secondary">
          Center Aligned Heading
        </Heading>

        <Heading level={5} weight="medium">
          Medium Weight Heading
        </Heading>

        <Heading level={6} className="uppercase">
          Small Heading
        </Heading>
      </section>

      {/* ==========================
          Text Component Demo
      ========================== */}

      <section className="space-y-3">
        <Text>
          LNCT University is committed to providing world-class education, innovation, research, and
          outstanding placement opportunities.
        </Text>

        <Text color="primary">This is primary colored text.</Text>

        <Text align="center">This text is center aligned.</Text>

        <Text weight="semibold">This is semibold text.</Text>
      </section>

      {/* ==========================
          Button Component Demo
      ========================== */}

      <section className="flex flex-wrap gap-4">
        <Button>Primary Button</Button>

        <Button variant="secondary">Secondary</Button>

        <Button variant="outline">Outline</Button>

        <Button variant="ghost">Ghost</Button>

        <Button size="sm">Small</Button>

        <Button size="md">Medium</Button>

        <Button size="lg">Large</Button>

        <Button isLoading>Loading...</Button>

        <Button fullWidth>Full Width Button</Button>
      </section>

      {/* ==========================
          Input Component Demo
      ========================== */}

      <section className="space-y-10">
        <div className="space-y-2">
          <Heading level={1} align="center">
            Input Component Demo
          </Heading>
          <Text color="muted" align="center">
            Demonstration of all Input component variations.
          </Text>
        </div>

        <div className="space-y-6">
          <Heading level={2}>Default Inputs</Heading>

          <Input label="Full Name" placeholder="Enter your full name" />

          <Input
            label="Email Address"
            type="email"
            placeholder="Enter your email"
            helperText="We'll never share your email."
          />

          <Input label="Phone Number" placeholder="Enter your phone number" required />
        </div>

        <div className="flex flex-col" style={{ gap: "var(--space-24)" }}>
          <Heading level={2}>Input Sizes</Heading>

          <Input size="sm" label="Small Input" placeholder="Small size" />
          <Input size="md" label="Medium Input" placeholder="Medium size" />
          <Input size="lg" label="Large Input" placeholder="Large size" />
        </div>

        <div className="space-y-6">
          <Heading level={2}>Input Variants</Heading>

          <Input variant="default" label="Default Variant" placeholder="Default" />
          <Input variant="filled" label="Filled Variant" placeholder="Filled" />
          <Input variant="outline" label="Outline Variant" placeholder="Outline" />
        </div>

        <div className="space-y-24">
          <Heading level={2}>Input With Icons</Heading>

          <Input label="Search" placeholder="Search courses..." leftIcon={<Search size={18} />} />

          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            leftIcon={<Mail size={18} />}
          />

          <Input
            label="Search With Both Icons"
            placeholder="Search..."
            leftIcon={<Search size={18} />}
            rightIcon={<Mail size={18} />}
          />
        </div>

        <div className="space-y-6">
          <Heading level={2}>Input States</Heading>

          <Input label="Disabled Input" placeholder="Disabled" disabled />

          <Input
            label="Error Input"
            placeholder="Enter your email"
            error="Please enter a valid email address."
          />

          <Input label="Read Only Input" value="LNCT University" readOnly />
        </div>

        <div className="space-y-6">
          <Heading level={2}>Full Width Input</Heading>

          <Input label="Message" placeholder="This input uses full width." fullWidth />
        </div>
      </section>

      {/* ==========================
    Textarea Component Demo
========================== */}

      <section className="space-y-10">
        <div className="space-y-2">
          <Heading level={1} align="center">
            Textarea Component Demo
          </Heading>

          <Text color="muted">Demonstration of all Textarea component variations.</Text>
        </div>

        {/* Default Textareas */}

        <div className="space-y-6">
          <Heading level={2}>Default Textareas</Heading>

          <Textarea label="Message" placeholder="Enter your message..." />

          <Textarea
            label="Feedback"
            placeholder="Share your feedback..."
            helperText="Your feedback helps us improve."
          />

          <Textarea label="Description" placeholder="Write a short description..." required />
        </div>

        {/* Sizes */}

        <div className="space-y-6">
          <Heading level={2}>Textarea Sizes</Heading>

          <Textarea size="sm" label="Small Textarea" placeholder="Small size" />

          <Textarea size="md" label="Medium Textarea" placeholder="Medium size" />

          <Textarea size="lg" label="Large Textarea" placeholder="Large size" />
        </div>

        {/* Variants */}

        <div className="space-y-6">
          <Heading level={2}>Textarea Variants</Heading>

          <Textarea variant="default" label="Default Variant" placeholder="Default style" />

          <Textarea variant="filled" label="Filled Variant" placeholder="Filled style" />

          <Textarea variant="outline" label="Outline Variant" placeholder="Outline style" />
        </div>

        {/* Resize Options */}

        <div className="space-y-6">
          <Heading level={2}>Resize Options</Heading>

          <Textarea label="No Resize" resize="none" placeholder="Resize disabled" />

          <Textarea label="Vertical Resize" resize="vertical" placeholder="Resize vertically" />

          <Textarea
            label="Horizontal Resize"
            resize="horizontal"
            placeholder="Resize horizontally"
          />

          <Textarea label="Both Directions" resize="both" placeholder="Resize freely" />
        </div>

        {/* States */}

        <div className="space-y-6">
          <Heading level={2}>Textarea States</Heading>

          <Textarea label="Disabled" placeholder="Disabled textarea" disabled />

          <Textarea
            label="Error"
            placeholder="Write something..."
            error="This field is required."
          />

          <Textarea label="Read Only" value="LNCT University" readOnly />
        </div>

        {/* Custom Rows */}

        <div className="space-y-6">
          <Heading level={2}>Custom Rows</Heading>

          <Textarea label="4 Rows" rows={4} placeholder="Four rows" />

          <Textarea label="8 Rows" rows={8} placeholder="Eight rows" />
        </div>
      </section>

      {/* ==========================
    Select Component Demo
========================== */}

      <section className="space-y-10">
        <div className="space-y-2">
          <Heading level={1} align="center">
            Select Component Demo
          </Heading>

          <Text color="muted">Demonstration of all Select component variations.</Text>
        </div>

        {/* Default Select */}

        <div className="space-y-6">
          <Heading level={2}>Default Select</Heading>

          <Select label="Program" placeholder="Select Program" defaultValue="">
            <option value="btech">B.Tech</option>
            <option value="bca">BCA</option>
            <option value="mca">MCA</option>
            <option value="mba">MBA</option>
          </Select>

          <Select
            label="Department"
            helperText="Choose your preferred department."
            placeholder="Select Department"
            defaultValue=""
          >
            <option value="cse">Computer Science</option>
            <option value="ece">Electronics</option>
            <option value="me">Mechanical</option>
            <option value="ce">Civil</option>
          </Select>

          <Select
            label="Admission Type"
            required
            placeholder="Select Admission Type"
            defaultValue=""
          >
            <option value="regular">Regular</option>
            <option value="lateral">Lateral Entry</option>
          </Select>
        </div>

        {/* Sizes */}

        <div className="space-y-6">
          <Heading level={2}>Select Sizes</Heading>

          <Select size="sm" label="Small" defaultValue="" placeholder="Small Select">
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
          </Select>

          <Select size="md" label="Medium" defaultValue="" placeholder="Medium Select">
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
          </Select>

          <Select size="lg" label="Large" defaultValue="" placeholder="Large Select">
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
          </Select>
        </div>

        {/* Variants */}

        <div className="space-y-6">
          <Heading level={2}>Select Variants</Heading>

          <Select variant="default" label="Default" defaultValue="" placeholder="Default Variant">
            <option value="1">Option 1</option>
          </Select>

          <Select variant="filled" label="Filled" defaultValue="" placeholder="Filled Variant">
            <option value="1">Option 1</option>
          </Select>

          <Select variant="outline" label="Outline" defaultValue="" placeholder="Outline Variant">
            <option value="1">Option 1</option>
          </Select>
        </div>

        {/* States */}

        <div className="space-y-6">
          <Heading level={2}>Select States</Heading>

          <Select label="Disabled" disabled defaultValue="" placeholder="Disabled Select">
            <option value="1">Option 1</option>
          </Select>

          <Select
            label="Error"
            error="Please select a program."
            defaultValue=""
            placeholder="Select Program"
          >
            <option value="btech">B.Tech</option>
            <option value="mba">MBA</option>
          </Select>

          <Select label="Selected Value" defaultValue="mba">
            <option value="btech">B.Tech</option>
            <option value="mba">MBA</option>
            <option value="mca">MCA</option>
          </Select>
        </div>

        {/* Option Groups */}

        <div className="space-y-6">
          <Heading level={2}>Option Groups</Heading>

          <Select label="Programs" defaultValue="" placeholder="Select Program">
            <optgroup label="Engineering">
              <option value="cse">Computer Science</option>
              <option value="ece">Electronics</option>
              <option value="me">Mechanical</option>
            </optgroup>

            <optgroup label="Management">
              <option value="mba">MBA</option>
              <option value="bba">BBA</option>
            </optgroup>
          </Select>
        </div>
      </section>

      {/* ==========================
    Checkbox Component Demo
========================== */}

      <section className="space-y-10">
        <div className="space-y-2">
          <Heading level={1} align="center">
            Checkbox Component Demo
          </Heading>

          <Text color="muted">Demonstration of all Checkbox component variations.</Text>
        </div>

        {/* Default Checkbox */}

        <div className="space-y-6">
          <Heading level={2}>Default Checkbox</Heading>

          <Checkbox label="Accept Terms & Conditions" />

          <Checkbox
            label="Subscribe to Newsletter"
            helperText="Receive updates about admissions and events."
          />

          <Checkbox label="I agree to the Privacy Policy" required />
        </div>

        {/* Sizes */}

        <div className="space-y-6">
          <Heading level={2}>Checkbox Sizes</Heading>

          <Checkbox size="sm" label="Small Checkbox" />

          <Checkbox size="md" label="Medium Checkbox" />

          <Checkbox size="lg" label="Large Checkbox" />
        </div>

        {/* States */}

        <div className="space-y-6">
          <Heading level={2}>Checkbox States</Heading>

          <Checkbox label="Checked" defaultChecked />

          <Checkbox label="Disabled" disabled />

          <Checkbox label="Checked & Disabled" defaultChecked disabled />

          <Checkbox label="Error State" error="You must accept the terms." />

          <Checkbox label="Indeterminate" indeterminate />
        </div>

        {/* Multiple Selection */}

        <div className="space-y-6">
          <Heading level={2}>Multiple Selection</Heading>

          <Checkbox label="Computer Science" />

          <Checkbox label="Mechanical Engineering" />

          <Checkbox label="Civil Engineering" />

          <Checkbox label="Electronics & Communication" />
        </div>

        {/* Rich Label */}

        <div className="space-y-6">
          <Heading level={2}>Rich Label</Heading>

          <Checkbox
            label={
              <>
                I agree to the{" "}
                <a href="#" className="text-[var(--color-primary)] underline">
                  Terms & Conditions
                </a>{" "}
                and{" "}
                <a href="#" className="text-[var(--color-primary)] underline">
                  Privacy Policy
                </a>
                .
              </>
            }
          />
        </div>
      </section>

      {/* ==========================
    Radio Component Demo
========================== */}

      <section className="space-y-10">
        <div className="space-y-2">
          <Heading level={1} align="center">
            Radio Component Demo
          </Heading>

          <Text color="muted">Demonstration of all Radio component variations.</Text>
        </div>

        {/* Default Radio */}

        <div className="space-y-6">
          <Heading level={2}>Default Radio</Heading>

          <Radio name="default-program" value="btech" label="B.Tech" />

          <Radio
            name="default-program"
            value="mba"
            label="MBA"
            helperText="Choose your preferred program."
          />

          <Radio name="default-program" value="mca" label="MCA" required />
        </div>

        {/* Radio Group */}

        <div className="space-y-6">
          <Heading level={2}>Radio Group</Heading>

          <Radio name="gender" value="male" label="Male" />

          <Radio name="gender" value="female" label="Female" />

          <Radio name="gender" value="other" label="Other" />
        </div>

        {/* Sizes */}

        <div className="space-y-6">
          <Heading level={2}>Radio Sizes</Heading>

          <Radio name="size-demo" size="sm" value="sm" label="Small" />

          <Radio name="size-demo" size="md" value="md" label="Medium" />

          <Radio name="size-demo" size="lg" value="lg" label="Large" />
        </div>

        {/* States */}

        <div className="space-y-6">
          <Heading level={2}>Radio States</Heading>

          <Radio name="state-demo" value="checked" label="Default Checked" defaultChecked />

          <Radio name="state-demo" value="disabled" label="Disabled" disabled />

          <Radio
            name="state-demo-disabled"
            value="checked-disabled"
            label="Checked & Disabled"
            defaultChecked
            disabled
          />

          <Radio
            name="state-demo"
            value="error"
            label="Error State"
            error="Please select an option."
          />
        </div>

        {/* Rich Label */}

        <div className="space-y-6">
          <Heading level={2}>Rich Label</Heading>

          <Radio
            name="plan"
            value="premium"
            label={
              <>
                <strong>Premium Plan</strong>
                <br />
                Includes placement assistance and certification.
              </>
            }
          />
        </div>
      </section>

      {/* ==========================
    Switch Component Demo
========================== */}

      <section className="space-y-10">
        <div className="space-y-2">
          <Heading level={1} align="center">
            Switch Component Demo
          </Heading>

          <Text color="muted">Demonstration of all Switch component variations.</Text>
        </div>

        {/* Default Switch */}

        <div className="space-y-6">
          <Heading level={2}>Default Switch</Heading>

          <Switch label="Enable Notifications" />

          <Switch
            label="Receive Email Updates"
            helperText="We'll notify you about important announcements."
          />

          <Switch label="Enable SMS Alerts" required />
        </div>

        {/* Sizes */}

        <div className="space-y-6">
          <Heading level={2}>Switch Sizes</Heading>

          <Switch size="sm" label="Small Switch" />

          <Switch size="md" label="Medium Switch" />

          <Switch size="lg" label="Large Switch" />
        </div>

        {/* States */}

        <div className="space-y-6">
          <Heading level={2}>Switch States</Heading>

          <Switch label="Default Checked" defaultChecked />

          <Switch label="Disabled" disabled />

          <Switch label="Checked & Disabled" defaultChecked disabled />

          <Switch label="Error State" error="This setting is required." />
        </div>

        {/* Settings Example */}

        <div className="space-y-6">
          <Heading level={2}>Application Settings</Heading>

          <Switch
            defaultChecked
            label="Dark Mode"
            helperText="Enable dark theme across the application."
          />

          <Switch
            defaultChecked
            label="Email Notifications"
            helperText="Receive admission updates via email."
          />

          <Switch label="SMS Notifications" helperText="Receive SMS alerts for important events." />

          <Switch
            label="Marketing Emails"
            helperText="Receive newsletters and promotional updates."
          />
        </div>

        {/* Rich Label */}

        <div className="space-y-6">
          <Heading level={2}>Rich Label</Heading>

          <Switch
            defaultChecked
            label={
              <>
                <strong>Placement Alerts</strong>
                <br />
                Receive notifications for new placement drives and internships.
              </>
            }
          />
        </div>
      </section>
      <section>
        <div className="space-y-6">
          <Heading level={2}>Claude Skill Code Design and Component</Heading>
          <FeaturesSection />
        </div>
      </section>
    </main>
  );
}

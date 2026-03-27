import figma from '@figma/code-connect';
import { ButtonTEST } from './ButtonTest';

figma.connect(
  ButtonTEST,
  'https://www.figma.com/design/QWM2EhgZmv2KKcqI0315fx/Design-System-Cross-App?node-id=7473-1818',
  {
    props: {
      label: figma.string('Label'),
      variant: figma.enum('Variant', {
        Primary: 'primary',
        Secondary: 'secondary',
        Ghost: 'ghost',
      }),
      size: figma.enum('Size', {
        Small: 'small',
        Medium: 'medium',
        Large: 'large',
      }),
      disabled: figma.enum('State', {
        Disabled: true,
        Default: false,
        Hover: false,
      }),
    },
    example: ({ label, variant, size, disabled }) => (
      <ButtonTEST
        label={label}
        variant={variant}
        size={size}
        disabled={disabled}
      />
    ),
  }
);

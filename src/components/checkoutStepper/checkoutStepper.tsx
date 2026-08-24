import {
  Check,
  CreditCard,
  MapPin,
  UserRound,
  PackageCheck
} from "lucide-react";

import {
  StepperContainer,
  StepItem,
  StepCircle,
  StepLabel,
  StepLine,
  StepContent
} from "./checkoutStepperStyles";

interface CheckoutStepperProps {
  currentStep: number;
}

const steps = [
  {
    id: 1,
    label: "Identificação",
    icon: UserRound
  },
  {
    id: 2,
    label: "Entrega",
    icon: MapPin
  },
  {
    id: 3,
    label: "Pagamento",
    icon: CreditCard
  },
  {
    id: 4,
    label: "Confirmação",
    icon: PackageCheck
  }
];

export default function CheckoutStepper({
  currentStep
}: CheckoutStepperProps) {
  return (
    <StepperContainer>
      {steps.map((step,index) => {
          const Icon =
            step.icon;

          const isCompleted =
            step.id <
            currentStep;

          const isActive =
            step.id ===
            currentStep;

          return (
            <StepContent
              key={step.id}
            >
              <StepItem>
                <StepCircle
                  $active={
                    isActive
                  }
                  $completed={
                    isCompleted
                  }
                >
                  {isCompleted ? (
                    <Check
                      size={18}
                    />
                  ) : (
                    <Icon
                      size={18}
                    />
                  )}
                </StepCircle>

                <StepLabel
                  $active={
                    isActive
                  }
                  $completed={
                    isCompleted
                  }
                >
                  {step.label}
                </StepLabel>
              </StepItem>

              {index <
                steps.length -
                  1 && (
                <StepLine
                  $completed={
                    step.id <
                    currentStep
                  }
                />
              )}
            </StepContent>
          );
        }
      )}
    </StepperContainer>
  );
}
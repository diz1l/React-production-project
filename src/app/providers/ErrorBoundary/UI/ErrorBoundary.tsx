import { ErrorPage } from 'widgets/ErrorPage';
import { PageLoader } from 'widgets/PageLoader';
import React, { Component, ErrorInfo, Suspense } from 'react';

interface ErrorBoundaryProps {
    children: React.ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true };
    }
    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(error, errorInfo);
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;
        if (hasError) {
            return (
                <Suspense fallback={<PageLoader/>}>
                    <ErrorPage />
                </Suspense>
            );
        }
        return children;
    }
}

export default ErrorBoundary;

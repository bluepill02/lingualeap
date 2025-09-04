
'use client';

import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { InertiaAnimation } from './InertiaAnimation';
import { ActionReactionAnimation } from './ActionReactionAnimation';
import { LiftAnimation } from './LiftAnimation';
import { ProjectileAnimation } from './ProjectileAnimation';
import { KinematicsGraphAnimation } from './KinematicsGraphAnimation';

// This is a simplified and somewhat unsafe way to get text content from children.
// A more robust solution might traverse the tree properly.
function getRawTextContent(node: React.ReactNode): string {
    let text = '';
    React.Children.forEach(node, child => {
        if (typeof child === 'string') {
            text += child;
        } else if (React.isValidElement(child) && child.props.children) {
            text += getRawTextContent(child.props.children);
        }
    });
    return text;
}


export const MarkdownRenderer: React.FC<{ children: string | null | undefined }> = ({ children }) => {
    if (!children) return null;
    return (
        <ReactMarkdown
            remarkPlugins={[remarkGfm, remarkMath]}
            rehypePlugins={[rehypeKatex]}
            components={{
                p: ({ node, ...props }) => {
                     const textContent = getRawTextContent(props.children);
                    
                    if (textContent.includes('{{')) {
                        if (textContent.trim() === '{{INERTIA_ANIMATION}}') {
                            return <div className="not-prose my-4"><InertiaAnimation /></div>;
                        }
                        if (textContent.trim() === '{{ACTION_REACTION_ANIMATION}}') {
                            return <div className="not-prose my-4"><ActionReactionAnimation /></div>;
                        }
                        if (textContent.trim() === '{{LIFT_ANIMATION}}') {
                            return <div className="not-prose my-4"><LiftAnimation /></div>;
                        }
                        if (textContent.trim() === '{{PROJECTILE_ANIMATION}}') {
                            return <div className="not-prose my-4"><ProjectileAnimation /></div>;
                        }
                         if (textContent.trim() === '{{KINEMATICS_GRAPH_ANIMATION}}') {
                            return <div className="not-prose my-4"><KinematicsGraphAnimation /></div>;
                        }
                    }
                    return <p {...props} />;
                },
                 // Add any other custom component renderings here if needed
                code({node, className, children, ...props}) {
                    const match = /language-(\w+)/.exec(className || '')
                    // This is a workaround for LaTeX block rendering
                    if (className === 'language-math' && typeof children === 'string' && !children.startsWith('$$')) {
                        return <code>{`$$${children}$$`}</code>
                    }
                    return <code className={className} {...props}>{children}</code>
                }
            }}
        >
            {children}
        </ReactMarkdown>
    );
};

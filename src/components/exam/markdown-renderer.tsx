
'use client';

import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import { InertiaAnimation } from './InertiaAnimation';
import { ActionReactionAnimation } from './ActionReactionAnimation';
import { LiftAnimation } from './LiftAnimation';
import { ProjectileAnimation } from './ProjectileAnimation';
import { KinematicsGraphAnimation } from './KinematicsGraphAnimation';
import { LabSimulator } from './LabSimulator';
import { ModelViewer } from './ModelViewer';
import { IceSkaterAnimation } from './IceSkaterAnimation';

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
            rehypePlugins={[rehypeRaw, rehypeKatex]}
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
                        if (textContent.trim() === '{{ICE_SKATER_ANIMATION}}') {
                            return <div className="not-prose my-4"><IceSkaterAnimation /></div>;
                        }
                        if (textContent.trim() === '{{OHMS_LAW_SIMULATOR}}') {
                            return <div className="not-prose my-4"><LabSimulator /></div>;
                        }
                         if (textContent.trim() === '{{ATOM_MODEL_VIEWER}}') {
                            return <div className="not-prose my-4"><ModelViewer /></div>;
                        }
                    }

                    return <p {...props}>{props.children}</p>;
                },
            }}
        >
            {children}
        </ReactMarkdown>
    );
};

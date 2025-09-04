
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

    const renderBilingualText = (text: string) => {
        const regex = /(.*?)\s*\(([^)]+)\)/g;
        const parts = [];
        let lastIndex = 0;
        let match;

        while ((match = regex.exec(text)) !== null) {
            // Add the text before the match
            if (match.index > lastIndex) {
                parts.push(text.substring(lastIndex, match.index));
            }
            // Add the styled bilingual part
            const english = match[1];
            const tamil = match[2];
            parts.push(
                <React.Fragment key={match.index}>
                    {english}
                    <span className="text-yellow-400/90 italic text-sm ml-1">({tamil})</span>
                </React.Fragment>
            );
            lastIndex = regex.lastIndex;
        }

        // Add any remaining text after the last match
        if (lastIndex < text.length) {
            parts.push(text.substring(lastIndex));
        }

        return <>{parts}</>;
    };

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

                    // Process for bilingual text
                    const childrenWithBilingual = React.Children.map(props.children, child => {
                        if (typeof child === 'string') {
                            return renderBilingualText(child);
                        }
                        return child;
                    });

                    return <p {...props}>{childrenWithBilingual}</p>;
                },
                 li({ node, ...props }) {
                    const childrenWithBilingual = React.Children.map(props.children, child => {
                        if (React.isValidElement(child) && child.props.children) {
                             const childContent = getRawTextContent(child.props.children);
                             return <p>{renderBilingualText(childContent)}</p>
                        }
                        if (typeof child === 'string') {
                            return renderBilingualText(child);
                        }
                        return child;
                    });
                     return <li {...props}>{childrenWithBilingual}</li>;
                },
                strong({node, ...props}) {
                     const childrenWithBilingual = React.Children.map(props.children, child => {
                        if (typeof child === 'string') {
                            return renderBilingualText(child);
                        }
                        return child;
                    });
                    return <strong {...props}>{childrenWithBilingual}</strong>
                }
            }}
        >
            {children}
        </ReactMarkdown>
    );
};

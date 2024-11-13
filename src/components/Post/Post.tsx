"use client";
import React from "react";

import Link from "next/link";

import { Icon, Typography, Avatar } from "@/components";

import { PostProps } from "./Post.types";

export function Post({ category, title, description, user, href }: PostProps) {
  return (
    <div className="w-full flex flex-col gap-3">
      <Typography
        as="p2"
        className="font-bold first-letter:uppercase"
        color="primary"
      >
        {category}
      </Typography>
      <div className="w-full flex flex-col gap-8">
        <div className="w-full flex justify-between">
          <Typography
            as="h2"
            className="first-letter:uppercase"
            truncationWidth={260}
          >
            {title}
          </Typography>
          <a
            className="flex items-center w-8 h-8 rounded-sm hover:bg-primary-50"
            href={href}
            target="_blank"
          >
            <Icon name="nav-arrow" />
          </a>
        </div>
        <Typography as="p2" className="text-dark-200 first-letter:uppercase">
          {description}
        </Typography>
      </div>

      <div className="flex items-center gap-3 mt-12 mb-6">
        <Avatar src={user.avatar} name={user.name} />
        <div className="flex flex-col flex-1">
          <Typography as="small" className="font-medium">
            {user.name}
          </Typography>
          <Typography as="small" className="text-dark-200">
            {user.date}
          </Typography>
        </div>
      </div>
    </div>
  );
}

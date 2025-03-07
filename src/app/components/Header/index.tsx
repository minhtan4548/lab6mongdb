"use client";

import {
  Layout,
  Breadcrumb,
  Avatar,
  Dropdown,
  MenuProps,
  Typography,
  Divider,
  Space,
} from "antd";
import {
  UserOutlined,
  LogoutOutlined,
  LockOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

const { Header } = Layout;
const { Text } = Typography;

interface UserProps {
  user: {
    username: string;
    fullName: string;
    avatar: string | null;
    role: string;
  } | null;
}

export default function CustomHeader({ user }: UserProps) {
  const avatarSrc = user?.avatar && user.avatar !== "" ? user.avatar : null;

  const userMenuItems: MenuProps["items"] = [
    {
      key: "avatar",
      label: (
        <div className="w-44">
          <Space
            direction="horizontal"
            size="small"
            style={{ display: "flex" }}
          >
            <Avatar
              size={50}
              src={avatarSrc}
              icon={!avatarSrc ? <UserOutlined /> : undefined}
            />
            <div className="flex flex-col">
              <Text strong>{user?.fullName || "Người dùng"}</Text>
              <Text type="secondary">{user?.role || "Vai trò"}</Text>
            </div>
          </Space>
          <Divider style={{ margin: "10px 0" }} />
        </div>
      ),
    },
    { key: "profile", label: "Thông tin", icon: <InfoCircleOutlined /> },
    { key: "change-password", label: "Đổi mật khẩu", icon: <LockOutlined /> },
    { type: "divider" },
    {
      key: "logout",
      label: "Đăng xuất",
      icon: <LogoutOutlined />,
      danger: true,
    },
    { type: "divider" },
    {
      key: "version",
      label: "Hoàng Kha - 2025",
      disabled: true,
      style: { textAlign: "center" },
    },
  ];

  return (
    <Header
      style={{
        padding: "0 20px",
        background: "#ffffff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #f0f0f0",
      }}
    >
      <Breadcrumb
        items={[
          {
            title: "Trang chủ",
          },
          {
            title: <a href="/admin/products">Danh sách sản phẩm</a>,
          },
        ]}
      />

      <Dropdown
        menu={{ items: userMenuItems }}
        trigger={["click"]}
        placement="bottomRight"
        arrow
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            cursor: "pointer",
          }}
        >
          <Avatar
            size="default"
            src={avatarSrc}
            icon={!avatarSrc ? <UserOutlined /> : undefined}
          />
        </div>
      </Dropdown>
    </Header>
  );
}
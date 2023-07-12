import React from "react";
import SortIcon from "../../assets/SortIcon";
import SortDuoIcon from "../../assets/SortActiveIcon";
import { Dropdown, Input, InputRef, Modal, Tooltip } from "antd";
import MagnifyIcon from "../../assets/MagnifyIcon";
import FilterIcon from "../../assets/FilterIcon";
import FilterActiveIcon from "../../assets/FilterActiveIcon";

type Props = {
  setFilters: React.Dispatch<React.SetStateAction<Record<string, any>>>;
  filters: Record<string, any>;
  title: string;
  searchName?: string;
  sortName?: string;
  filterOptions?: { label: string; key: string }[];
};

function CustomHeaderTable({
  setFilters,
  filters,
  title,
  searchName,
  sortName,
  filterOptions,
}: Props) {
  const inputRef = React.useRef<InputRef>(null);
  const [sortName1, sortValue] = filters.sort?.split(",");
  const filter1 = filters[sortName ?? ""];

  return (
    <div className="flex gap-2">
      <p className="mr-auto">{title}</p>

      {/* Sort */}
      {sortName && (
        <button
          onClick={() => {
            setFilters((prev) => {
              return {
                ...prev,
                sort:
                  sortName1 === sortName
                    ? sortValue === "desc"
                      ? `${sortName},asc`
                      : `${sortName},desc`
                    : `${sortName},asc`,
              };
            });
          }}
        >
          <div
            className={`w-5 h-5 transition ${
              sortName === sortName1 && sortValue === "asc" ? "rotate-180" : ""
            } ${sortName === sortName1 ? "text-p500" : ""}`}
          >
            {sortName === sortName1 ? <SortIcon /> : <SortDuoIcon />}
          </div>
        </button>
      )}

      {/* Search */}
      {searchName && !filterOptions && (
        <Tooltip title={filters[searchName]}>
          <button
            onClick={() => {
              Modal.info({
                title: "Search for " + title,
                okButtonProps: {
                  className: "bg-p500",
                },
                maskClosable: true,
                content: (
                  <div>
                    <Input
                      defaultValue={filters[searchName]}
                      ref={inputRef}
                      placeholder="Search"
                    />
                  </div>
                ),
                onOk: () => {
                  setFilters((prev) => {
                    return {
                      ...prev,
                      [searchName]: inputRef.current?.input?.value ?? "",
                    };
                  });
                },
              });
            }}
          >
            <div
              className={`w-5 h-5 ${
                filters[searchName] && filters[searchName] !== ""
                  ? "text-p500"
                  : ""
              }`}
            >
              <MagnifyIcon />
            </div>
          </button>
        </Tooltip>
      )}

      {/* Filter */}
      {filterOptions && searchName && (
        <Tooltip
          title={
            filterOptions.find((option) => option.key === filter1)?.label ?? ""
          }
        >
          <Dropdown
            trigger={["click"]}
            menu={{
              activeKey: filter1,
              items: filterOptions,
              onClick: (value) => {
                setFilters((prev) => {
                  return {
                    ...prev,
                    [searchName]: value.key,
                  };
                });
              },
            }}
          >
            <button>
              <div className="w-5 h-5">
                {filter1 ? <FilterActiveIcon /> : <FilterIcon />}
              </div>
            </button>
          </Dropdown>
        </Tooltip>
      )}
    </div>
  );
}

export default CustomHeaderTable;

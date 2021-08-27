import {Button, Popover, Typography, createStyles, makeStyles, Input, TextField} from '@material-ui/core'
import React, { FormEvent, ReactElement, useCallback } from 'react'
import { TableInstance } from 'react-table'
import {useState, State } from "@hookstate/core";
import {cpStore} from "../../../store";
import {CompanyPriority} from "../../../State";
import {getCompanyPriorityList, insertCompanyPriorityItem} from "../../../APICalls/Interview/getCompanyPriorityList";

const useStyles = makeStyles(
  createStyles({
    columnsPopOver: {
      padding: 24,
    },
    filtersResetButton: {
      position: 'absolute',
      top: 18,
      right: 21,
    },
    popoverTitle: {
      fontWeight: 500,
      padding: '0 24px 24px 0',
      textTransform: 'uppercase',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 218px)',
      '@media (max-width: 600px)': {
        gridTemplateColumns: 'repeat(1, 180px)',
      },
      gridColumnGap: 24,
      gridRowGap: 24,
    },
    cell: {
      width: '100%',
      display: 'inline-flex',
      flexDirection: 'column',
    },
    hidden: {
      display: 'none',
    },
  })
)

type AddCompanyPriorityPageProps<T extends Record<string, unknown>> = {
  instance: TableInstance<T>
  anchorEl?: Element
  onClose: () => void
  show: boolean,
  companyPriorityItem: State<CompanyPriority>
}

export function AddCompanyPriorityPage<T extends Record<string, unknown>>({
                                                                instance,
                                                                anchorEl,
                                                                onClose,
                                                                show,
  companyPriorityItem
                                                              }: AddCompanyPriorityPageProps<T>): ReactElement {
  const classes = useStyles({})
  const { allColumns, setAllFilters } = instance
  const { companyPriority } = useState(cpStore);

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      console.log(e);
      e.preventDefault()
      onClose()
    },
    [onClose]
  )

  const onSubmit2 = async (e: any) => {
    // insert then retrieve
    insertCompanyPriorityItem(companyPriorityItem)
      .then(() => {
        getCompanyPriorityList()
          .then((r) => {
            return r.json();
          })
          .then((data) => {
            companyPriority.set(data);
          });
      });
    e.preventDefault()
    onClose()
  }

  const resetFilters = useCallback(() => {
    setAllFilters([])
  }, [setAllFilters])

  return (
    <div>
      <Popover
        anchorEl={anchorEl}
        id={'popover-addCP'}
        onClose={onClose}
        open={show}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <div className={classes.columnsPopOver}>
          <Typography className={classes.popoverTitle}>Add Company Priority</Typography>
          <form onSubmit={onSubmit}>
            <div className={classes.grid}>
              <TextField
                id="company"
                label="Company"
                value={companyPriorityItem.company.get()}
                onChange={e => companyPriorityItem.company.set(e.target.value)}
              />
              <TextField
                id="priority"
                label="Priority"
                value={companyPriorityItem.priority.get()}
                onChange={e => {
                  console.log(e.target.value);
                  companyPriorityItem.priority.set(Number.parseInt(e.target.value))
                }}
              />
            </div>
            <Button
              variant="contained"
              color="primary"
              onClick={(e) => {
                onSubmit2(e)
              }}
            >
              Primary
            </Button>
          </form>
        </div>
      </Popover>
    </div>
  )
}
